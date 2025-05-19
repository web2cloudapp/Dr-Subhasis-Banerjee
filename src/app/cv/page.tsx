export default function CV() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">Curriculum Vitae</h1>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
        <p className="mb-4 sm:mb-0">Detailed professional information and academic history of Dr. Subhasis Banerjee.</p>
        <a href="#" className="cv-link">Download CV</a>
      </div>

      <div className="space-y-10">
        <section>
          <h2 className="text-2xl font-bold mb-4 border-b pb-2">Personal Information</h2>
          <div className="ml-4 space-y-2">
            <p><strong>Name:</strong> Dr. Subhasis Banerjee</p>
            <p><strong>Designation:</strong> Assistant Professor-III</p>
            <p><strong>Department:</strong> Department of Computer & System Sciences</p>
            <p><strong>Institution:</strong> Siksha Bhavana (Institute of Science), Visva-Bharati University</p>
            <p><strong>Address:</strong> Santiniketan – 731235, Birbhum, WB, INDIA</p>
            <p><strong>Email:</strong> subhasis.banerjee@visva-bharati.ac.in</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 border-b pb-2">Academic Qualifications</h2>
          <div className="ml-4 space-y-4">
            <div>
              <h3 className="text-xl font-semibold">Ph.D. in Computer Science</h3>
              <p>Thesis: "Design of some protocols for secured communication in ad hoc network"</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">M.Tech in Computer Science</h3>
              <p>Indian Statistical Institute</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 border-b pb-2">Professional Experience</h2>
          <div className="ml-4">
            <div className="mb-4">
              <h3 className="text-xl font-semibold">Assistant Professor-III</h3>
              <p>Department of Computer & System Sciences, Visva-Bharati University</p>
              <p>March 11, 2002 - Present</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 border-b pb-2">Research Interests</h2>
          <ul className="ml-4 list-disc pl-5 space-y-1">
            <li>Wireless Communication</li>
            <li>Distributed System</li>
            <li>Internet Technology</li>
            <li>Emerging Technology</li>
            <li>Ad-hoc Network</li>
            <li>Cryptography</li>
            <li>Internet of Things</li>
            
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 border-b pb-2">Teaching Experience</h2>
          <div className="ml-4">
            <p>Over 20 years of teaching experience in various Computer Science and Information Technology courses at undergraduate and postgraduate levels.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 border-b pb-2">Current PhD Supervision</h2>
          <div className="ml-4 space-y-4">
            <div>
              <h3 className="text-xl font-semibold">Haranath Rakshit</h3>
              <p>Full-time Research Scholar (Enrolled: 2022)</p>
              <p>Department of Computer and System Sciences</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Rajkumar Bhandari</h3>
              <p>Full-time Research Scholar (Enrolled: 2023)</p>
              <p>Department of Computer and System Sciences</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 border-b pb-2">Academic IDs</h2>
          <div className="ml-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <p><strong>Google Scholar:</strong> <a href="https://scholar.google.com/citations?user=2tSem3wAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">2tSem3wAAAAJ</a></p>
            <p><strong>ORCID ID:</strong> <a href="https://orcid.org/0009-0007-1154-7289" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">0009-0007-1154-7289</a></p>
            <p><strong>SCOPUS ID:</strong> <a href="https://www.scopus.com/authid/detail.uri?authorId=59715624000" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">59715624000</a></p>
            <p><strong>IEEE Xplore:</strong> <a href="https://ieeexplore.ieee.org/author/37085767208" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">37085767208</a></p>
            <p><strong>ResearchGate:</strong> <a href="https://www.researchgate.net/profile/Subhasis-Banerjee-6" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Subhasis-Banerjee-6</a></p>
            <p><strong>Vidwan:</strong> <a href="https://vidwan.inflibnet.ac.in/profile/215837" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Profile #215837</a></p>
            <p><strong>IRINS:</strong> <a href="https://visvabharati.irins.org/profile/215837" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Profile #215837</a></p>
          </div>
        </section>
      </div>
    </div>
  );
}
