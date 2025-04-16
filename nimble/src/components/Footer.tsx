
import { Link } from "react-router-dom";
import { Instagram, Twitter, Linkedin, Github } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-design-black text-white pt-16 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <Link to="/" className="block mb-6">
              <span className="font-sora font-bold text-2xl text-white">
                nimble<span className="text-design-accent">.</span>
              </span>
            </Link>
            <p className="text-design-gray-400 mb-6">
              We create exceptional digital experiences that connect brands with their audiences in meaningful ways.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-design-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-design-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-design-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-design-gray-400 hover:text-white transition-colors" aria-label="GitHub">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-design-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/work" className="text-design-gray-400 hover:text-white transition-colors">Our Work</Link></li>
              <li><Link to="/services" className="text-design-gray-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/careers" className="text-design-gray-400 hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="text-design-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-3">
              <li><Link to="/services/ui-ux-design" className="text-design-gray-400 hover:text-white transition-colors">UI/UX Design</Link></li>
              <li><Link to="/services/mobile-app-design" className="text-design-gray-400 hover:text-white transition-colors">Mobile App Design</Link></li>
              <li><Link to="/services/digital-strategy" className="text-design-gray-400 hover:text-white transition-colors">Digital Strategy</Link></li>
              <li><Link to="/services/design-systems" className="text-design-gray-400 hover:text-white transition-colors">Design Systems</Link></li>
              <li><Link to="/services/branding" className="text-design-gray-400 hover:text-white transition-colors">Branding</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="text-design-gray-400">123 Design Street,<br/>San Francisco, CA 94103</li>
              <li><a href="tel:+1234567890" className="text-design-gray-400 hover:text-white transition-colors">+1 (234) 567-890</a></li>
              <li><a href="mailto:hello@nimblestudio.com" className="text-design-gray-400 hover:text-white transition-colors">hello@nimblestudio.com</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-design-gray-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-design-gray-500 text-sm">
              © {currentYear} Nimble Studio. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-design-gray-500 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-design-gray-500 hover:text-white text-sm transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
