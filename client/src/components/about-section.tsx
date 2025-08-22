export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4" data-testid="text-about-heading">About</h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </div>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed mb-6" data-testid="text-about-paragraph-1">
            I'm a Software Engineer at Folio3 with a passion for building scalable web applications and exploring cutting-edge AI technologies. My experience spans from architecting full-stack solutions with React and Node.js to implementing advanced AI agent platforms.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6" data-testid="text-about-paragraph-2">
            With a Computer Science degree from LUMS and hands-on experience in both enterprise and startup environments, I bring a unique perspective to solving complex technical challenges. I'm particularly excited about the intersection of traditional web development and emerging AI capabilities.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed" data-testid="text-about-paragraph-3">
            When I'm not coding, I'm constantly learning about new technologies and contributing to open-source projects that push the boundaries of what's possible with modern web development.
          </p>
        </div>
      </div>
    </section>
  );
}
