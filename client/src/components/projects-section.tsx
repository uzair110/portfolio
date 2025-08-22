export default function ProjectsSection() {
  const projects = [
    {
      title: "AgentDesk",
      description: "Created a multi-agent platform that enabled onboarding multiple AI agents, registering multiple tools to each agent and connecting to MCP clients using MCP servers.",
      tags: ["AI Agents", "MCP", "Multi-Agent Systems"],
      tagColors: "bg-accent/10 text-accent"
    },
    {
      title: "Jacksons Food Stores", 
      description: "Built a Next.js/Medusa e-commerce site with Redux/Context API for optimized routing & state along with integrating Google Maps/Search via Tailwind for seamless, location-based shopping.",
      tags: ["Next.js", "MedusaJS", "Google Maps API", "E-commerce"],
      tagColors: "bg-blue-100 text-blue-800"
    },
    {
      title: "AI Guardian",
      description: "Delivered complete frontend implementation for AI Guardian project within 3-week deadline, collaborating with QA for robust feature deployment and user experience optimization.",
      tags: ["React", "AI Integration", "Frontend"],
      tagColors: "bg-green-100 text-green-800"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4" data-testid="text-projects-heading">Featured Projects</h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={project.title} className="bg-gray-50 rounded-xl p-8 card-hover transition-shadow duration-200 hover:shadow-lg" data-testid={`card-project-${project.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}>
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3" data-testid={`text-project-title-${index}`}>{project.title}</h3>
                <p className="text-gray-600 leading-relaxed" data-testid={`text-project-description-${index}`}>
                  {project.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className={`${project.tagColors} px-2 py-1 rounded text-sm`}
                    data-testid={`tag-project-${tag.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <button 
                className="text-accent hover:text-indigo-700 font-medium focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                data-testid={`button-view-project-${index}`}
              >
                View Project →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
