import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, useNavigationType } from "react-router-dom";
import Navigation from "./components/Navigation";
import React, { Suspense } from "react";
import { useEffect, useState } from "react";
import { useIsFetching } from "@tanstack/react-query";
import Footer from "./components/Footer";
import { PerformanceMonitor } from "./components/PerformanceMonitor";
import WhatsAppFloatingButton from "./components/WhatsAppFloatingButton";

const queryClient = new QueryClient();

const Home = React.lazy(() => import("./pages/Home"));
const HowItWorks = React.lazy(() => import("./pages/HowItWorks"));
const Services = React.lazy(() => import("./pages/Services"));
const Impact = React.lazy(() => import("./pages/Impact"));
const OurStory = React.lazy(() => import("./pages/OurStory"));
const Contact = React.lazy(() => import("./pages/Contact"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

// Service Landing Pages
const EventsWeddingsService = React.lazy(() => import("./pages/EventsWeddingsService"));
const FoodCourtsCaterersService = React.lazy(() => import("./pages/FoodCourtsCaterersService"));
const InstitutionsOfficesService = React.lazy(() => import("./pages/InstitutionsOfficesService"));
const ApartmentSocietiesHouseholdGatheringsService = React.lazy(() => import("./pages/ApartmentSocietiesHouseholdGatheringsService"));

// ScrollToTop component
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Route transition loading spinner
function RouteLoader() {
  const isFetching = useIsFetching();
  if (!isFetching) return null;
  return (
    <div style={{position:'fixed',zIndex:9999,inset:0,display:'flex',alignItems:'center',justifyContent:'center',background:'rgba(254,251,246,0.7)'}}>
      <div style={{width:48,height:48,border:'6px solid #58B692',borderTop:'6px solid #1A382E',borderRadius:'50%',animation:'spin 1s linear infinite'}} />
      <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
    </div>
  );
}

// ErrorBoundary component
interface ErrorBoundaryProps {
  children: React.ReactNode;
}
interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}
class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // You can log error to an error reporting service here
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',height:'100vh',background:'#FEFBF6'}}>
          <h1 style={{color:'#1A382E'}}>Something went wrong.</h1>
          <pre style={{color:'#B00020',marginTop:16}}>{this.state.error?.toString()}</pre>
          <button style={{marginTop:24,padding:'8px 16px',background:'#58B692',color:'#fff',border:'none',borderRadius:8}} onClick={()=>window.location.reload()}>Reload</button>
        </div>
      );
    }
    return this.props.children;
  }
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <RouteLoader />
        <ErrorBoundary>
          <Suspense fallback={<div style={{display:'flex',alignItems:'center',justifyContent:'center',height:'100vh'}}><div style={{width:48,height:48,border:'6px solid #58B692',borderTop:'6px solid #1A382E',borderRadius:'50%',animation:'spin 1s linear infinite'}} /><style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style></div>}>
            <div className="min-h-screen bg-background flex flex-col">
              <PerformanceMonitor />
              <Navigation />
              <div className="flex-1">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/How-it-works" element={<HowItWorks />} />
                  <Route path="/Services" element={<Services />} />
                  <Route path="/Impact" element={<Impact />} />
                  <Route path="/our-story" element={<OurStory />} />
                  <Route path="/Contact" element={<Contact />} />
                  
                  {/* Service Landing Pages */}
                  <Route path="/services/events-weddings" element={<EventsWeddingsService />} />
                  <Route path="/services/food-courts-caterers" element={<FoodCourtsCaterersService />} />
                  <Route path="/services/institutions-offices" element={<InstitutionsOfficesService />} />
                  <Route path="/services/apartment-societies-household-gatherings" element={<ApartmentSocietiesHouseholdGatheringsService />} />
                  
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </div>
              <Footer />
              <WhatsAppFloatingButton />
            </div>
          </Suspense>
        </ErrorBoundary>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
