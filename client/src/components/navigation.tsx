import { useState } from "react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
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
    <nav className="sticky top-0 bg-white/90 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-xl font-semibold" data-testid="nav-logo">Uzair Mustafa</div>
          <div className="hidden md:flex space-x-8">
            <a 
              href="#home" 
              className="nav-link text-gray-600 hover:text-accent transition-colors duration-200"
              onClick={(e) => handleNavClick(e, "#home")}
              data-testid="nav-home"
            >
              Home
            </a>
            <a 
              href="#about" 
              className="nav-link text-gray-600 hover:text-accent transition-colors duration-200"
              onClick={(e) => handleNavClick(e, "#about")}
              data-testid="nav-about"
            >
              About
            </a>
            <a 
              href="#resume" 
              className="nav-link text-gray-600 hover:text-accent transition-colors duration-200"
              onClick={(e) => handleNavClick(e, "#resume")}
              data-testid="nav-resume"
            >
              Resume
            </a>
            <a 
              href="#skills" 
              className="nav-link text-gray-600 hover:text-accent transition-colors duration-200"
              onClick={(e) => handleNavClick(e, "#skills")}
              data-testid="nav-skills"
            >
              Skills
            </a>
            <a 
              href="#projects" 
              className="nav-link text-gray-600 hover:text-accent transition-colors duration-200"
              onClick={(e) => handleNavClick(e, "#projects")}
              data-testid="nav-projects"
            >
              Projects
            </a>
            <a 
              href="#awards" 
              className="nav-link text-gray-600 hover:text-accent transition-colors duration-200"
              onClick={(e) => handleNavClick(e, "#awards")}
              data-testid="nav-awards"
            >
              Awards
            </a>
            <a 
              href="#contact" 
              className="nav-link text-gray-600 hover:text-accent transition-colors duration-200"
              onClick={(e) => handleNavClick(e, "#contact")}
              data-testid="nav-contact"
            >
              Contact
            </a>
          </div>
          <button 
            className="md:hidden focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
            onClick={toggleMobileMenu}
            data-testid="button-mobile-menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden pb-4`} data-testid="mobile-menu">
          <div className="flex flex-col space-y-2">
            <a 
              href="#home" 
              className="nav-link text-gray-600 py-2 hover:text-accent transition-colors duration-200"
              onClick={(e) => handleNavClick(e, "#home")}
              data-testid="nav-mobile-home"
            >
              Home
            </a>
            <a 
              href="#about" 
              className="nav-link text-gray-600 py-2 hover:text-accent transition-colors duration-200"
              onClick={(e) => handleNavClick(e, "#about")}
              data-testid="nav-mobile-about"
            >
              About
            </a>
            <a 
              href="#resume" 
              className="nav-link text-gray-600 py-2 hover:text-accent transition-colors duration-200"
              onClick={(e) => handleNavClick(e, "#resume")}
              data-testid="nav-mobile-resume"
            >
              Resume
            </a>
            <a 
              href="#skills" 
              className="nav-link text-gray-600 py-2 hover:text-accent transition-colors duration-200"
              onClick={(e) => handleNavClick(e, "#skills")}
              data-testid="nav-mobile-skills"
            >
              Skills
            </a>
            <a 
              href="#projects" 
              className="nav-link text-gray-600 py-2 hover:text-accent transition-colors duration-200"
              onClick={(e) => handleNavClick(e, "#projects")}
              data-testid="nav-mobile-projects"
            >
              Projects
            </a>
            <a 
              href="#awards" 
              className="nav-link text-gray-600 py-2 hover:text-accent transition-colors duration-200"
              onClick={(e) => handleNavClick(e, "#awards")}
              data-testid="nav-mobile-awards"
            >
              Awards
            </a>
            <a 
              href="#contact" 
              className="nav-link text-gray-600 py-2 hover:text-accent transition-colors duration-200"
              onClick={(e) => handleNavClick(e, "#contact")}
              data-testid="nav-mobile-contact"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
