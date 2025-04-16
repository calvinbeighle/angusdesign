
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <p className="text-design-accent font-medium mb-3">Our Story</p>
              <h1 className="font-bold mb-6">We create meaningful digital experiences</h1>
              <p className="text-design-gray-600 text-lg">
                Nimble Studio is a design-led agency focused on creating digital experiences that connect brands with their audience in meaningful and impactful ways.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <p className="text-design-accent font-medium mb-3">Our Mission</p>
                <h2 className="font-bold mb-6">Crafting digital experiences with purpose</h2>
                <p className="text-design-gray-600 mb-6">
                  At Nimble Studio, we believe that thoughtful design has the power to transform businesses and enhance people's lives. Our mission is to create digital experiences that are not just visually appealing but also functional, inclusive, and meaningful.
                </p>
                <p className="text-design-gray-600 mb-6">
                  Founded in 2018, we've grown from a small team of passionate designers to a full-service design agency working with clients across industries. Our collaborative approach and dedication to excellence have made us trusted partners for businesses looking to elevate their digital presence.
                </p>
                <Link to="/contact" className="btn-primary">
                  Work with us
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
              
              <div className="order-1 lg:order-2">
                <div className="aspect-[4/3] rounded-xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                    alt="Our team in a collaborative session" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-design-gray-50">
          <div className="container-custom text-center">
            <p className="text-design-accent font-medium mb-3">Our Values</p>
            <h2 className="font-bold mb-16">What drives us every day</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Human-Centered",
                  description: "We design for people first, creating experiences that are intuitive, accessible, and enjoyable to use."
                },
                {
                  title: "Collaborative",
                  description: "We believe great ideas come from diverse perspectives and work closely with our clients as true partners."
                },
                {
                  title: "Excellence",
                  description: "We set high standards for our work and are committed to delivering exceptional quality in everything we do."
                }
              ].map((value, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
                  <div className="w-12 h-12 bg-design-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check size={24} className="text-design-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                  <p className="text-design-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
