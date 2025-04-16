
export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
}

export const projectsData: Project[] = [
  {
    id: "sustainable",
    title: "Sustainable Living Platform",
    category: "Web Design",
    description: "A comprehensive platform helping users track and improve their sustainability practices through intuitive design and gamification. The platform offers personalized recommendations, progress tracking, and community features to encourage sustainable lifestyle choices. We focused on creating an engaging user experience that makes sustainability accessible and enjoyable for everyone.",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "finance-app",
    title: "FinTrack Mobile App",
    category: "Mobile Design",
    description: "An award-winning financial tracking application designed to simplify complex financial data through beautiful visualizations. This mobile app helps users manage their finances with intuitive interfaces, real-time insights, and personalized recommendations. Our design approach focused on translating complex financial concepts into accessible, actionable information for users of all financial literacy levels.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "healthcare",
    title: "HealthConnect Platform",
    category: "UX Design",
    description: "A patient-centered healthcare platform that bridges the gap between patients and providers through thoughtful, accessible design. This comprehensive system includes appointment scheduling, secure messaging, medical records access, and telemedicine capabilities. We designed with accessibility and inclusivity at the forefront, ensuring that users of all abilities can navigate their healthcare journey with confidence.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "ecommerce",
    title: "Artisan Marketplace",
    category: "E-commerce",
    description: "A digital marketplace connecting artisans with customers worldwide through an immersive shopping experience. This platform showcases handcrafted products with rich storytelling about the artisans and their craft traditions. Our design emphasizes visual storytelling, seamless navigation, and streamlined checkout processes while highlighting the unique value of handmade goods in a mass-produced world.",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
  }
];
