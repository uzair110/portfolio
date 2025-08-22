export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Redux"],
      bgColor: "bg-blue-100",
      textColor: "text-blue-800"
    },
    {
      title: "Backend", 
      skills: ["Node.js", "Express.js", "Python", "MedusaJS"],
      bgColor: "bg-green-100",
      textColor: "text-green-800"
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "Elasticsearch", "Redis", "Firebase"],
      bgColor: "bg-purple-100", 
      textColor: "text-purple-800"
    },
    {
      title: "Cloud/DevOps",
      skills: ["AWS Lambda", "AWS Kinesis", "AWS S3", "AWS EC2", "GitHub Actions", "Jest"],
      bgColor: "bg-orange-100",
      textColor: "text-orange-800"
    }
  ];

  const aiSkills = ["Multi Agent Systems", "RAG (Retrieval Augmented Generation)", "MCP (Model Context Protocol)", "Agent Handoffs", "Generative AI"];
  
  const softSkills = ["Client Communications", "Teamwork", "Problem Solving", "Project Management"];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4" data-testid="text-skills-heading">Technical Skills</h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={category.title} className="bg-white rounded-xl p-8 card-hover transition-shadow duration-200 hover:shadow-lg" data-testid={`card-skills-${category.title.toLowerCase()}`}>
              <h3 className="text-xl font-semibold text-gray-900 mb-6" data-testid={`text-skills-${category.title.toLowerCase()}-title`}>{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className={`${category.bgColor} ${category.textColor} px-3 py-1 rounded-lg text-sm`}
                    data-testid={`tag-skill-${skill.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* AI Section - Featured */}
        <div className="mt-8">
          <div className="bg-gradient-to-r from-accent to-indigo-600 rounded-xl p-8 text-white" data-testid="card-skills-ai">
            <h3 className="text-xl font-semibold mb-6" data-testid="text-skills-ai-title">AI & Emerging Technologies</h3>
            <div className="flex flex-wrap gap-3">
              {aiSkills.map((skill) => (
                <span 
                  key={skill} 
                  className="bg-white/20 text-white px-3 py-1 rounded-lg text-sm"
                  data-testid={`tag-ai-skill-${skill.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Soft Skills */}
        <div className="mt-8">
          <div className="bg-white rounded-xl p-8 card-hover transition-shadow duration-200 hover:shadow-lg" data-testid="card-skills-soft">
            <h3 className="text-xl font-semibold text-gray-900 mb-6" data-testid="text-skills-soft-title">Soft Skills</h3>
            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill) => (
                <span 
                  key={skill} 
                  className="bg-gray-100 text-gray-800 px-3 py-1 rounded-lg text-sm"
                  data-testid={`tag-soft-skill-${skill.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
