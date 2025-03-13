
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-4 px-6 transition-all duration-300 ease-in-out",
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="text-xl md:text-2xl font-serif font-bold tracking-tight">
            <span className="text-primary">Surveyor</span>
            <span className="text-primary/70">Insights</span>
          </a>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#featured" className="text-sm font-medium text-primary/80 hover:text-primary transition-colors">
            Featured
          </a>
          <a href="#articles" className="text-sm font-medium text-primary/80 hover:text-primary transition-colors">
            Articles
          </a>
          <a href="https://bidkon.com.au/quantity-surveyors-melbourne/" className="text-sm font-medium text-primary/80 hover:text-primary transition-colors">
            Professional Services
          </a>
        </nav>
        
        <div className="md:hidden">
          <button className="text-primary/80 hover:text-primary transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
