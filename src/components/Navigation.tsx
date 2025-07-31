import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import hybitsLogo from "@/assets/LOGO.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Track scroll for enhanced navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "How It Works", path: "/how-it-works" },
    { name: "Services", path: "/services" },
    { name: "Our Story", path: "/our-story" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className={`bg-background/95 backdrop-blur-md border-b border-border/50 sticky top-0 z-50 transition-all duration-300 ${
      scrolled ? 'shadow-lg bg-background/98' : ''
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center group">
              <img 
                src={hybitsLogo} 
                alt="Hybits Sterilised Dish Logo" 
                className="h-10 w-auto transition-transform duration-300 group-hover:scale-105" 
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative text-sm font-medium transition-all duration-300 py-2 px-3 rounded-lg group ${
                  location.pathname === item.path
                    ? "text-primary bg-primary/10"
                    : "text-foreground hover:text-primary hover:bg-primary/5"
                }`}
              >
                <span className="relative z-10">{item.name}</span>
                <div className={`absolute inset-0 bg-primary/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  location.pathname === item.path ? 'opacity-100' : ''
                }`} />
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-muted-foreground hover:text-foreground p-2 rounded-lg hover:bg-primary/10 transition-all duration-300 group"
            >
              <svg className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border/50">
            <div className="pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-4 py-3 text-base font-medium rounded-lg mx-2 transition-all duration-300 ${
                    location.pathname === item.path
                      ? "text-primary bg-primary/10 border-l-4 border-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-primary/5"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
              </div>
      </nav>
  );
};

export default Navigation;