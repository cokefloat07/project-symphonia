
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center space-x-2 text-xl font-bold"
        >
          <span className="text-gradient">Symphonia</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-sm font-medium hover:text-primary/80 transition-colors">
            Home
          </Link>
          <Link to="/features" className="text-sm font-medium hover:text-primary/80 transition-colors">
            Features
          </Link>
          <Link to="/pricing" className="text-sm font-medium hover:text-primary/80 transition-colors">
            Pricing
          </Link>
          <Link to="/about" className="text-sm font-medium hover:text-primary/80 transition-colors">
            About
          </Link>
          <Link to="/login">
            <Button variant="outline" size="sm" className="ml-2">
              Sign In
            </Button>
          </Link>
          <Link to="/register">
            <Button size="sm">Get Started</Button>
          </Link>
        </nav>

        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-t border-border py-4 px-4 animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <Link to="/" className="text-sm font-medium hover:text-primary/80 transition-colors">
              Home
            </Link>
            <Link to="/features" className="text-sm font-medium hover:text-primary/80 transition-colors">
              Features
            </Link>
            <Link to="/pricing" className="text-sm font-medium hover:text-primary/80 transition-colors">
              Pricing
            </Link>
            <Link to="/about" className="text-sm font-medium hover:text-primary/80 transition-colors">
              About
            </Link>
            <div className="flex space-x-2 pt-2">
              <Link to="/login" className="flex-1">
                <Button variant="outline" size="sm" className="w-full">
                  Sign In
                </Button>
              </Link>
              <Link to="/register" className="flex-1">
                <Button size="sm" className="w-full">
                  Get Started
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
