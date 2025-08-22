export default function HeroSection() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      const offsetTop = targetSection.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6" data-testid="text-hero-name">
          Uzair Mustafa
        </h1>
        <h2 className="text-xl sm:text-2xl text-gray-600 mb-8" data-testid="text-hero-title">
          Senior Fullstack Engineer
        </h2>
        <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-12" data-testid="text-hero-tagline">
          Software engineer specializing in full-stack development. Beyond my core work, I actively build and experiment with Generative AI and AI Agent applications, bringing new ideas into working prototypes.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <a 
            href="#projects" 
            className="bg-accent text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
            onClick={(e) => handleNavClick(e, "#projects")}
            data-testid="button-view-projects"
          >
            View Projects
          </a>
          <a 
            href="#contact" 
            className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:border-gray-400 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            onClick={(e) => handleNavClick(e, "#contact")}
            data-testid="button-get-in-touch"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
