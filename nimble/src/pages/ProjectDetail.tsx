
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ArrowLeft, ExternalLink } from "lucide-react";
import AnimateOnScroll from "../components/AnimateOnScroll";
import { Button } from "@/components/ui/button";
import { projectsData } from "../data/projects";

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = projectsData.find((p) => p.id === projectId);
  
  if (!project) {
    return <div className="pt-24 text-center">Project not found</div>;
  }

  return (
    <>
      <Navbar />
      <main className="pt-24">
        {/* Header Section */}
        <section className="section-padding pb-6">
          <div className="container-custom">
            <div className="mb-8">
              <Link to="/work" className="text-design-accent font-medium flex items-center hover:underline mb-4">
                <ArrowLeft size={16} className="mr-2" />
                Back to projects
              </Link>
              <AnimateOnScroll>
                <p className="text-design-accent font-medium mb-3">{project.category}</p>
                <h1 className="font-bold mb-6">{project.title}</h1>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* Project Hero */}
        <section className="pb-16">
          <div className="container-custom">
            <AnimateOnScroll>
              <div className="rounded-xl overflow-hidden mb-12">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[50vh] md:h-[70vh] object-cover"
                />
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Project Details */}
        <section className="pb-20">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="md:col-span-2">
                <AnimateOnScroll>
                  <h2 className="text-2xl font-bold mb-6">Project Overview</h2>
                  <div className="prose max-w-none text-design-gray-600">
                    <p className="mb-4">
                      {project.description}
                    </p>
                    <p className="mb-4">
                      We worked closely with the client to understand their goals and target audience.
                      The result is a solution that not only meets their needs but exceeds expectations
                      in terms of usability, design, and performance.
                    </p>
                    <p>
                      This project demonstrates our commitment to creating meaningful digital experiences
                      that solve real problems and drive results for our clients.
                    </p>
                  </div>
                </AnimateOnScroll>
              </div>

              <div>
                <AnimateOnScroll delay={200}>
                  <div className="bg-design-gray-50 rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-4">Project Details</h3>
                    <div className="space-y-4">
                      <div>
                        <p className="text-design-gray-500 text-sm">Category</p>
                        <p className="font-medium">{project.category}</p>
                      </div>
                      <div>
                        <p className="text-design-gray-500 text-sm">Client</p>
                        <p className="font-medium">Client Name</p>
                      </div>
                      <div>
                        <p className="text-design-gray-500 text-sm">Timeline</p>
                        <p className="font-medium">8 weeks</p>
                      </div>
                      <div>
                        <p className="text-design-gray-500 text-sm">Services</p>
                        <p className="font-medium">UX Design, UI Design, Development</p>
                      </div>
                      <div className="pt-2">
                        <Button className="w-full flex items-center justify-center gap-2">
                          Visit Live Site
                          <ExternalLink size={16} />
                        </Button>
                      </div>
                    </div>
                  </div>
                </AnimateOnScroll>
              </div>
            </div>
          </div>
        </section>

        {/* Project Images */}
        <section className="pb-24">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <AnimateOnScroll>
                <div className="rounded-xl overflow-hidden">
                  <img
                    src={`https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80`}
                    alt="Project detail"
                    className="w-full aspect-video object-cover"
                  />
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll delay={100}>
                <div className="rounded-xl overflow-hidden">
                  <img
                    src={`https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80`}
                    alt="Project detail"
                    className="w-full aspect-video object-cover"
                  />
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll delay={200}>
                <div className="rounded-xl overflow-hidden">
                  <img
                    src={`https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80`}
                    alt="Project detail"
                    className="w-full aspect-video object-cover"
                  />
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll delay={300}>
                <div className="rounded-xl overflow-hidden">
                  <img
                    src={`https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80`}
                    alt="Project detail"
                    className="w-full aspect-video object-cover"
                  />
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* Next Project CTA */}
        <section className="pb-24">
          <div className="container-custom">
            <div className="border-t border-design-gray-200 pt-16 text-center">
              <AnimateOnScroll>
                <p className="text-design-accent font-medium mb-3">Next Project</p>
                <h2 className="text-3xl font-bold mb-6">Explore more of our work</h2>
                <Link to="/work" className="btn-primary inline-flex">
                  View All Projects
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

export default ProjectDetail;
