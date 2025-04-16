
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import AnimateOnScroll from "../components/AnimateOnScroll";
import { projectsData } from "../data/projects";

const Work = () => {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        {/* Header Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <AnimateOnScroll>
                <p className="text-design-accent font-medium mb-3">Our Work</p>
                <h1 className="font-bold mb-6">Featured Projects</h1>
                <p className="text-design-gray-600 text-lg">
                  Explore our portfolio of design work for clients across industries, showcasing our approach to solving complex design challenges.
                </p>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projectsData.map((project, index) => (
                <AnimateOnScroll key={project.id} delay={index * 100}>
                  <Link to={`/work/${project.id}`} className="group block">
                    <div className="overflow-hidden rounded-xl mb-6">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div>
                      <span className="text-design-accent text-sm font-medium mb-2 block">{project.category}</span>
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-design-accent transition-colors">{project.title}</h3>
                      <p className="text-design-gray-600 mb-4">{project.description}</p>
                      <span className="text-design-accent font-medium flex items-center">
                        View Project
                        <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container-custom">
            <div className="bg-design-gray-50 rounded-2xl p-12 text-center">
              <AnimateOnScroll>
                <h2 className="font-bold mb-6">Have a project in mind?</h2>
                <p className="text-design-gray-600 mb-8 max-w-2xl mx-auto">
                  We'd love to hear about your project and explore how we can help bring your vision to life through exceptional design.
                </p>
                <Link to="/contact" className="btn-primary">
                  Start a Project
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

export default Work;
