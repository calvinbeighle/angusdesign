
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projectsData } from "../data/projects";

const Portfolio = () => {
  // Use only the first 4 projects for the homepage portfolio section
  const featuredProjects = projectsData.slice(0, 4);
  
  return (
    <section id="portfolio" className="section-padding">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <p className="text-design-accent font-medium mb-3">Selected Work</p>
            <h2 className="font-bold">Our latest projects</h2>
          </div>
          <Link to="/work" className="mt-4 md:mt-0 inline-flex items-center text-design-accent font-medium group">
            View all projects
            <ArrowUpRight size={16} className="ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <Link 
              key={index} 
              to={`/work/${project.id}`}
              className="group relative block overflow-hidden rounded-xl animate-on-scroll"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="aspect-[16/12] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-design-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                <div className="text-white">
                  <p className="text-design-accent mb-2">{project.category}</p>
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
