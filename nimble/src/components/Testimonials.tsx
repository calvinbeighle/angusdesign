
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Working with Nimble Studio transformed our digital presence. Their attention to detail and strategic approach to UX design resulted in a 40% increase in user engagement.",
    author: "Sarah Johnson",
    position: "CMO at TechVision",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGVyc29ufHx8fHx8MTY1MTU3NDk4MQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300"
  },
  {
    quote: "The team at Nimble Studio doesn't just create beautiful designs—they solve real business problems. Our new app has received outstanding feedback from users and industry experts alike.",
    author: "Michael Chang",
    position: "Founder at Elevate",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGVyc29ufHx8fHx8MTY1MTU3NTA0OQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300"
  },
  {
    quote: "Nimble Studio's design process is thorough and collaborative. They took the time to understand our unique challenges and delivered solutions that exceeded our expectations.",
    author: "Elena Rodriguez",
    position: "Director at GrowthLab",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGVyc29ufHx8fHx8MTY1MTU3NTEwMA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300"
  }
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-design-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-design-accent font-medium mb-3">Testimonials</p>
          <h2 className="font-bold mb-6">What our clients say</h2>
          <p className="text-design-gray-600 text-lg">
            We've helped businesses across various industries achieve their digital goals. Here's what they have to say about working with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-sm relative animate-on-scroll"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <Quote size={40} className="text-design-gray-200 absolute top-6 left-6" />
              <div className="relative">
                <p className="text-design-gray-700 mb-8 text-balance">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="mr-4 w-12 h-12 rounded-full overflow-hidden">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-design-black">{testimonial.author}</p>
                    <p className="text-sm text-design-gray-500">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
