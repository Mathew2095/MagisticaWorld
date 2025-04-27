import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close mobile menu when navigating to a new page
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Add scrolled class when page is scrolled
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#121212]/90 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center cursor-pointer">
            <Link href="/">
              <span className="text-primary-light text-2xl font-cinzel font-bold">Магистика</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/">
              <span className={`text-light hover:text-primary-light transition duration-300 magic-border py-2 ${location === '/' ? 'text-primary-light' : ''}`}>
                О нас
              </span>
            </Link>
            <Link href="/rules">
              <span className={`text-light hover:text-primary-light transition duration-300 magic-border py-2 ${location === '/rules' ? 'text-primary-light' : ''}`}>
                Правила
              </span>
            </Link>
            <Link href="/support">
              <span className={`text-light hover:text-primary-light transition duration-300 magic-border py-2 ${location === '/support' ? 'text-primary-light' : ''}`}>
                Поддержка
              </span>
            </Link>
          </nav>
          
          {/* Mobile Navigation Toggle */}
          <button 
            onClick={toggleMenu} 
            className="md:hidden text-light focus:outline-none"
            aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>
        
        {/* Mobile Navigation Menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} pt-4 pb-2 animate-fadeIn`}>
          <nav className="flex flex-col space-y-4">
            <Link href="/">
              <span className={`text-light hover:text-primary-light transition duration-300 py-2 border-b border-primary-dark/30 block ${location === '/' ? 'text-primary-light' : ''}`}>
                О нас
              </span>
            </Link>
            <Link href="/rules">
              <span className={`text-light hover:text-primary-light transition duration-300 py-2 border-b border-primary-dark/30 block ${location === '/rules' ? 'text-primary-light' : ''}`}>
                Правила
              </span>
            </Link>
            <Link href="/support">
              <span className={`text-light hover:text-primary-light transition duration-300 py-2 block ${location === '/support' ? 'text-primary-light' : ''}`}>
                Поддержка
              </span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
