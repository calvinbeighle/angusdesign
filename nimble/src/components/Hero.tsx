
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-design-accent font-medium mb-4 animate-fade-in">Design Studio</p>
            <h1 className="font-bold mb-6 animate-slide-up" style={{ animationDelay: "200ms" }}>
              We create <span className="text-gradient">exceptional</span> digital experiences
            </h1>
            <p className="text-lg text-design-gray-600 mb-8 max-w-xl text-balance animate-slide-up" style={{ animationDelay: "400ms" }}>
              Nimble Studio transforms brands through strategic design and thoughtful user experiences. We blend creativity and functionality to deliver digital solutions that engage users and drive results.
            </p>
            <div className="flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: "600ms" }}>
              <Link to="/contact" className="btn-primary">
                Start Your Project
                <ArrowRight className="ml-2 inline-block" size={16} />
              </Link>
              <Link to="/work" className="btn-outline">
                View Our Work
              </Link>
            </div>
          </div>
          <div className="order-1 lg:order-2 animate-fade-in" style={{ animationDelay: "300ms" }}>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                  alt="Designer working on UX project" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-design-accent flex items-center justify-center shadow-lg p-3 text-center">
                <span className="text-white font-sora font-bold text-xs leading-tight">
                  10+ Years of Design Excellence
                </span>
              </div>
              <div className="absolute -top-6 -right-6 p-4 bg-white rounded-xl shadow-xl">
                <p className="text-sm text-design-gray-600">Award-winning</p>
                <p className="font-sora font-medium">Design Agency</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
