
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 shadow-md backdrop-blur-sm py-3" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="font-sora font-bold text-2xl text-design-black">
            nimble<span className="text-design-accent">.</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/services" className="nav-link">Services</Link>
          <Link to="/work" className="nav-link">Work</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </nav>

        <div className="hidden md:block">
          <Button className="btn-primary">Get in Touch</Button>
        </div>

        {/* Mobile menu button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-design-black"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex flex-col h-full p-8">
          <div className="flex justify-between items-center mb-12">
            <Link to="/" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
              <span className="font-sora font-bold text-2xl text-design-black">
                nimble<span className="text-design-accent">.</span>
              </span>
            </Link>
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="text-design-black"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          <nav className="flex flex-col space-y-6 text-lg">
            <Link to="/" className="nav-link text-xl" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/about" className="nav-link text-xl" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link to="/services" className="nav-link text-xl" onClick={() => setIsMenuOpen(false)}>Services</Link>
            <Link to="/work" className="nav-link text-xl" onClick={() => setIsMenuOpen(false)}>Work</Link>
            <Link to="/contact" className="nav-link text-xl" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          </nav>

          <div className="mt-auto">
            <Button className="btn-primary w-full" onClick={() => setIsMenuOpen(false)}>Get in Touch</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
