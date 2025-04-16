
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { MapPin, Mail, Phone, SendIcon } from "lucide-react";
import AnimateOnScroll from "../components/AnimateOnScroll";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
    // In a real app, you would handle form submission here
  };

  return (
    <>
      <Navbar />
      <main className="pt-24">
        {/* Header Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <AnimateOnScroll>
                <p className="text-design-accent font-medium mb-3">Get In Touch</p>
                <h1 className="font-bold mb-6">Let's start a conversation</h1>
                <p className="text-design-gray-600 text-lg">
                  Have a project in mind or want to learn more about our services? We'd love to hear from you.
                </p>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <AnimateOnScroll>
                <div>
                  <h2 className="font-bold mb-8">Contact Information</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-design-accent/10 rounded-full flex items-center justify-center mr-4">
                        <MapPin className="text-design-accent" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">Our Location</h4>
                        <p className="text-design-gray-600">
                          123 Design Street,<br />
                          San Francisco, CA 94103
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-design-accent/10 rounded-full flex items-center justify-center mr-4">
                        <Mail className="text-design-accent" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">Email Us</h4>
                        <a href="mailto:hello@nimblestudio.com" className="text-design-accent hover:underline">
                          hello@nimblestudio.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-design-accent/10 rounded-full flex items-center justify-center mr-4">
                        <Phone className="text-design-accent" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">Call Us</h4>
                        <a href="tel:+1234567890" className="text-design-accent hover:underline">
                          +1 (234) 567-890
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll delay={200}>
                <div>
                  <h2 className="font-bold mb-8">Send us a message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="form-group">
                        <label htmlFor="name" className="block mb-2 font-medium">Full Name</label>
                        <input
                          id="name"
                          type="text"
                          className="w-full px-4 py-3 rounded-lg border border-design-gray-300 focus:outline-none focus:ring-2 focus:ring-design-accent/50"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="email" className="block mb-2 font-medium">Email Address</label>
                        <input
                          id="email"
                          type="email"
                          className="w-full px-4 py-3 rounded-lg border border-design-gray-300 focus:outline-none focus:ring-2 focus:ring-design-accent/50"
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="subject" className="block mb-2 font-medium">Subject</label>
                      <input
                        id="subject"
                        type="text"
                        className="w-full px-4 py-3 rounded-lg border border-design-gray-300 focus:outline-none focus:ring-2 focus:ring-design-accent/50"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="message" className="block mb-2 font-medium">Your Message</label>
                      <textarea
                        id="message"
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg border border-design-gray-300 focus:outline-none focus:ring-2 focus:ring-design-accent/50"
                        required
                      ></textarea>
                    </div>
                    <button type="submit" className="btn-primary flex items-center justify-center">
                      Send Message
                      <SendIcon size={16} className="ml-2" />
                    </button>
                  </form>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
