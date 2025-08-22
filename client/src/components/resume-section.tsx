export default function ResumeSection() {
  const handleDownloadResume = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/api/resume/download';
    link.download = 'Uzair_Mustafa_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewResume = () => {
    // Open resume in new tab
    window.open('/api/resume/view', '_blank');
  };

  return (
    <section id="resume" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4" data-testid="text-resume-heading">Resume</h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-xl p-8 card-hover transition-shadow duration-200 hover:shadow-lg">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2" data-testid="text-resume-title">Professional Resume</h3>
              <p className="text-gray-600 mb-6" data-testid="text-resume-description">Download my complete resume to learn more about my experience and achievements.</p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <button 
                  className="bg-accent text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                  onClick={handleDownloadResume}
                  data-testid="button-download-pdf"
                >
                  Download PDF
                </button>
                <button 
                  className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:border-gray-400 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                  onClick={handleViewResume}
                  data-testid="button-view-online"
                >
                  View Online
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
