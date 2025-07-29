# 🎨 Hybits Typography Guide - Poppins & Montserrat

## 📝 Font Hierarchy

### **Primary Fonts:**
- **Poppins**: Headings, titles, and accent text
- **Montserrat**: Body text, paragraphs, and general content

## 🎯 Font Usage Guidelines

### **Poppins (Headings & Titles)**
```typescript
// Tailwind classes
<h1 className="font-heading font-bold text-4xl">Main Title</h1>
<h2 className="font-heading font-semibold text-2xl">Section Title</h2>
<h3 className="font-heading font-medium text-xl">Subsection</h3>

// Alternative classes
<p className="font-poppins font-semibold">Accent text</p>
<span className="font-heading">Logo text</span>
```

### **Montserrat (Body Text)**
```typescript
// Default body text (automatically applied)
<p>This is regular body text</p>
<span>Navigation items</span>

// Explicit classes
<p className="font-sans">Body paragraph</p>
<p className="font-montserrat font-medium">Medium weight text</p>
<p className="font-sans font-light">Light body text</p>
```

## 🏗️ Implementation Details

### **Automatic Font Application:**
- **All heading tags** (`h1`, `h2`, `h3`, `h4`, `h5`, `h6`) automatically use Poppins
- **All other text** automatically uses Montserrat
- **Custom classes** available for manual control

### **Available Tailwind Classes:**
```css
font-heading     /* Poppins for headings */
font-sans        /* Montserrat (default) */
font-poppins     /* Explicit Poppins */
font-montserrat  /* Explicit Montserrat */
```

### **Font Weights Available:**
- `font-light` (300)
- `font-normal` (400) 
- `font-medium` (500)
- `font-semibold` (600)
- `font-bold` (700)

## 🎨 Design Patterns

### **Hero Sections:**
```typescript
<div className="hero">
  <h1 className="font-heading font-bold text-5xl lg:text-6xl">
    Hybits
  </h1>
  <p className="font-sans text-lg font-medium">
    Sustainable dishware solutions for a cleaner future
  </p>
</div>
```

### **Card Titles:**
```typescript
<Card>
  <h3 className="font-heading font-semibold text-xl mb-2">
    Service Title
  </h3>
  <p className="font-sans text-gray-600">
    Service description using Montserrat for readability.
  </p>
</Card>
```

### **Navigation:**
```typescript
<nav>
  <span className="font-heading font-bold text-xl">Hybits</span>
  <ul>
    <li className="font-sans font-medium">Home</li>
    <li className="font-sans font-medium">Services</li>
  </ul>
</nav>
```

### **Buttons:**
```typescript
// Primary buttons with Poppins
<Button className="font-heading font-semibold">
  Get Started
</Button>

// Secondary buttons with Montserrat  
<Button className="font-sans font-medium">
  Learn More
</Button>
```

## 📊 Typography Scale

### **Headings (Poppins):**
```typescript
// Large displays
<h1 className="font-heading font-bold text-4xl lg:text-6xl">

// Page titles  
<h1 className="font-heading font-bold text-3xl lg:text-4xl">

// Section titles
<h2 className="font-heading font-semibold text-2xl lg:text-3xl">

// Subsection titles
<h3 className="font-heading font-medium text-xl lg:text-2xl">

// Card titles
<h4 className="font-heading font-semibold text-lg">
```

### **Body Text (Montserrat):**
```typescript
// Large body text
<p className="font-sans text-lg">

// Regular body text  
<p className="font-sans text-base">

// Small text
<p className="font-sans text-sm">

// Caption text
<p className="font-sans text-xs">
```

## 🎨 Color Combinations

### **Primary Text:**
```typescript
// Dark text on light backgrounds
className="text-foreground" // #1A382E (Medium Jungle Green)

// Light text on dark backgrounds  
className="text-background" // #FEFBF6 (Lotion)
```

### **Accent Text:**
```typescript
// Primary brand color
className="text-primary" // #58B692 (Ocean Green)

// Muted text for descriptions
className="text-muted-foreground"
```

## 📱 Responsive Typography

### **Mobile-First Approach:**
```typescript
// Responsive heading
<h1 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl">
  Responsive Title
</h1>

// Responsive body text
<p className="font-sans text-sm sm:text-base lg:text-lg">
  Responsive paragraph text
</p>
```

### **Breakpoint Guidelines:**
- **Mobile**: Smaller sizes, tighter line-height
- **Tablet**: Medium sizes, balanced spacing
- **Desktop**: Larger sizes, generous spacing

## ✅ Best Practices

### **Do's:**
- ✅ Use Poppins for headings and important UI elements
- ✅ Use Montserrat for body text and descriptions
- ✅ Maintain consistent font weights across similar elements
- ✅ Use responsive text sizing
- ✅ Ensure sufficient contrast ratios

### **Don'ts:**
- ❌ Mix heading and body fonts randomly
- ❌ Use too many font weights in one design
- ❌ Make body text too small on mobile
- ❌ Use light weights on small text sizes
- ❌ Ignore accessibility guidelines

## 🔧 Development Notes

### **Font Loading:**
```html
<!-- Preloaded in index.html -->
<link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Montserrat:wght@300;400;500;600;700&display=swap" />
```

### **CSS Setup:**
```css
/* Automatic application in index.css */
* {
  font-family: 'Montserrat', sans-serif;
}

h1, h2, h3, h4, h5, h6, .font-heading {
  font-family: 'Poppins', sans-serif;
}
```

### **Performance:**
- Both fonts are preloaded for optimal performance
- `display=swap` ensures text remains visible during font load
- Font weights are optimized (300-700 range)

## 🧪 Testing

### **Manual Testing:**
```typescript
// Test Poppins
<h1 className="font-poppins font-bold text-4xl">Test Poppins</h1>

// Test Montserrat  
<p className="font-montserrat text-lg">Test Montserrat</p>
```

---

## 🚀 Implementation Checklist

- [x] Update font imports in `index.css`
- [x] Update preload links in `index.html`  
- [x] Configure Tailwind font families
- [x] Add base CSS for automatic font application
- [x] Document usage guidelines

Your Hybits website now uses the professional combination of **Poppins** (headings) and **Montserrat** (body text) for excellent readability and modern aesthetics! 