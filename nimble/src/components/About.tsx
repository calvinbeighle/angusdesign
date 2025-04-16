
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                alt="Design team collaboration" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-design-gray-100 rounded-xl -z-10"></div>
            <div className="absolute top-1/2 -translate-y-1/2 -left-8 p-6 bg-white rounded-xl shadow-xl">
              <p className="font-sora font-bold text-2xl text-design-accent">85%</p>
              <p className="text-sm text-design-gray-600">Client retention rate</p>
            </div>
          </div>
          
          <div>
            <p className="text-design-accent font-medium mb-3">About Us</p>
            <h2 className="font-bold mb-6">We design experiences that people love</h2>
            <p className="text-design-gray-600 text-lg mb-8">
              Founded in 2018, Nimble Studio has grown into a team of passionate designers, strategists, and thinkers. We believe in the power of design to solve complex problems and create meaningful connections.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {['User-centered approach', 'Strategic thinking', 'Collaborative process', 'Attention to detail'].map((item, index) => (
                <div key={index} className="flex items-start">
                  <span className="mr-3 mt-1 bg-design-accent/10 p-1 rounded-full">
                    <Check size={16} className="text-design-accent" />
                  </span>
                  <span className="text-design-gray-700">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/about" className="btn-primary">
                Learn More About Us
              </Link>
              <Link to="/contact" className="btn-outline">
                Let's Work Together
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
