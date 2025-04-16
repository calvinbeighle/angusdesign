
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import AnimateOnScroll from "../components/AnimateOnScroll";

const Services = () => {
  const servicesList = [
    {
      title: "UI/UX Design",
      description: "Creating intuitive, engaging user experiences through thoughtful interface design.",
      features: [
        "User Research & Testing",
        "Wireframing & Prototyping",
        "Interaction Design",
        "Usability Testing"
      ]
    },
    {
      title: "Mobile App Design",
      description: "Designing seamless mobile experiences that engage users and drive results.",
      features: [
        "iOS & Android Design",
        "Design Systems",
        "Gesture-based Navigation",
        "Cross-platform Consistency"
      ]
    },
    {
      title: "Digital Strategy",
      description: "Developing comprehensive digital strategies that align with business goals.",
      features: [
        "Brand Analysis",
        "Competitive Research",
        "User Journey Mapping",
        "Implementation Planning"
      ]
    },
    {
      title: "Design Systems",
      description: "Building scalable, consistent design systems for seamless product development.",
      features: [
        "Component Libraries",
        "Design Guidelines",
        "Documentation",
        "Implementation Support"
      ]
    },
    {
      title: "Branding",
      description: "Crafting distinctive brand identities that resonate with target audiences.",
      features: [
        "Visual Identity Design",
        "Brand Strategy",
        "Logo Design",
        "Brand Guidelines"
      ]
    }
  ];

  return (
    <>
      <Navbar />
      <main className="pt-24">
        {/* Header Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <AnimateOnScroll>
                <p className="text-design-accent font-medium mb-3">Our Services</p>
                <h1 className="font-bold mb-6">Expert design services for your digital needs</h1>
                <p className="text-design-gray-600 text-lg">
                  We offer a comprehensive range of design services to help businesses create meaningful connections with their audiences through exceptional digital experiences.
                </p>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-16 bg-design-gray-50">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {servicesList.map((service, index) => (
                <AnimateOnScroll key={index} delay={index * 100}>
                  <div className="bg-white p-8 rounded-xl shadow-sm h-full">
                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                    <p className="text-design-gray-600 mb-6">{service.description}</p>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle size={18} className="text-design-accent mr-2 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link 
                      to={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`} 
                      className="text-design-accent font-medium flex items-center hover:underline"
                    >
                      Learn more
                      <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container-custom">
            <div className="bg-design-black text-white rounded-2xl p-12 text-center max-w-4xl mx-auto">
              <AnimateOnScroll>
                <h2 className="font-bold mb-6">Ready to transform your digital presence?</h2>
                <p className="text-design-gray-400 mb-8 max-w-2xl mx-auto">
                  Let's collaborate to create exceptional digital experiences that connect with your audience and drive results.
                </p>
                <Link to="/contact" className="btn-primary bg-white text-design-black hover:bg-design-gray-200">
                  Contact Us
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </AnimateOnScroll>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Services;
