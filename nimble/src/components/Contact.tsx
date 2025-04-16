
import { Mail, MapPin, ArrowRight, Phone } from "lucide-react";
import { Button } from "./ui/button";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <p className="text-design-accent font-medium mb-3">Get in Touch</p>
            <h2 className="font-bold mb-6">Let's start a conversation</h2>
            <p className="text-design-gray-600 text-lg mb-8">
              Ready to transform your digital presence? Whether you have a specific project in mind or simply want to explore possibilities, we're here to help.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="mr-4 p-3 bg-design-gray-100 rounded-lg">
                  <Mail size={20} className="text-design-accent" />
                </div>
                <div>
                  <p className="font-medium text-design-black">Email Us</p>
                  <a href="mailto:hello@nimblestudio.com" className="text-design-gray-600 hover:text-design-accent">
                    hello@nimblestudio.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 p-3 bg-design-gray-100 rounded-lg">
                  <Phone size={20} className="text-design-accent" />
                </div>
                <div>
                  <p className="font-medium text-design-black">Call Us</p>
                  <a href="tel:+1234567890" className="text-design-gray-600 hover:text-design-accent">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 p-3 bg-design-gray-100 rounded-lg">
                  <MapPin size={20} className="text-design-accent" />
                </div>
                <div>
                  <p className="font-medium text-design-black">Visit Us</p>
                  <p className="text-design-gray-600">
                    123 Design Street, San Francisco, CA 94103
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-design-gray-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-design-gray-600 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-design-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-design-accent focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-design-gray-600 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-design-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-design-accent focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-design-gray-600 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 border border-design-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-design-accent focus:border-transparent"
                  placeholder="How can we help you?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-design-gray-600 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-design-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-design-accent focus:border-transparent"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              
              <Button className="btn-primary w-full">
                Send Message
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
