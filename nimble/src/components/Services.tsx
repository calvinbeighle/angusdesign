
import { Palette, Smartphone, LineChart, Layers, Users, Lightbulb, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const serviceItems = [
  {
    icon: <Palette size={32} className="text-design-accent" />,
    title: "UI/UX Design",
    description: "Creating intuitive and engaging user experiences that connect with your audience and achieve business goals."
  },
  {
    icon: <Smartphone size={32} className="text-design-accent" />,
    title: "Mobile App Design",
    description: "Crafting mobile experiences with seamless interactions and beautiful visuals that users love to engage with."
  },
  {
    icon: <LineChart size={32} className="text-design-accent" />,
    title: "Digital Strategy",
    description: "Developing comprehensive strategies that align business objectives with user needs for maximum impact."
  },
  {
    icon: <Layers size={32} className="text-design-accent" />,
    title: "Design Systems",
    description: "Building scalable design systems that maintain consistency while enabling teams to work efficiently."
  },
  {
    icon: <Users size={32} className="text-design-accent" />,
    title: "User Research",
    description: "Understanding your users through research to inform design decisions and create targeted solutions."
  },
  {
    icon: <Lightbulb size={32} className="text-design-accent" />,
    title: "Product Innovation",
    description: "Exploring new ideas and concepts that push boundaries and create unique digital products."
  }
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-design-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-design-accent font-medium mb-3">Our Services</p>
          <h2 className="font-bold mb-6">Transforming brands with strategic design</h2>
          <p className="text-design-gray-600 text-lg text-balance">
            We offer a comprehensive suite of design services to help businesses create meaningful connections with their audience through thoughtful digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-sm card-hover animate-on-scroll"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-5">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-design-gray-600 mb-4">{service.description}</p>
              <Link to="/services" className="inline-flex items-center text-design-accent font-medium">
                Learn more
                <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild className="btn-outline">
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
