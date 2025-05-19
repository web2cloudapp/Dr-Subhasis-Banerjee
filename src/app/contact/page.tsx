export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">Contact</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="border rounded-lg p-6 bg-white shadow-sm">
          <h2 className="text-2xl font-bold mb-4">Contact Information</h2>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">Address:</h3>
              <p className="ml-4">Department of Computer & System Sciences</p>
              <p className="ml-4">Siksha Bhavana (Institute of Science)</p>
              <p className="ml-4">Visva-Bharati</p>
              <p className="ml-4">Santiniketan – 731235</p>
              <p className="ml-4">Birbhum, WB, INDIA</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Email:</h3>
              <p className="ml-4">
                <a href="mailto:subhasis.banerjee@visva-bharati.ac.in" className="text-blue-600 hover:underline">
                  subhasis.banerjee@visva-bharati.ac.in
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="border rounded-lg p-6 bg-white shadow-sm">
          <h2 className="text-2xl font-bold mb-4">Academic Profiles</h2>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">Academic Profiles:</h3>
              <ul className="ml-4 space-y-2">
                <li>
                  <a
                    href="https://scholar.google.com/citations?user=2tSem3wAAAAJ&hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Google Scholar
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.researchgate.net/profile/Subhasis-Banerjee-6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    ResearchGate
                  </a>
                </li>
                <li>
                  <a
                    href="https://visvabharati.irins.org/profile/215837"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    IRINS
                  </a>
                </li>
                <li>
                  <a
                    href="https://vidwan.inflibnet.ac.in/profile/215837"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Vidwan
                  </a>
                </li>
                <li>
                  <a
                    href="https://orcid.org/0009-0007-1154-7289"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    ORCID
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.scopus.com/authid/detail.uri?authorId=59715624000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Scopus
                  </a>
                </li>
                <li>
                  <a
                    href="https://ieeexplore.ieee.org/author/37085767208"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    IEEE Xplore
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Social Media:</h3>
              <ul className="ml-4 space-y-2">
                <li>
                  <a
                    href="https://www.facebook.com/subhasis.banerjee.986"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Facebook
                  </a>
                </li>
              </ul>
               <ul className="ml-4 space-y-2">
                <li>
                  <a
                    href="https://www.linkedin.com/in/subhasis-banerjee-05313853/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Linkedin
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold">University Profile:</h3>
              <ul className="ml-4 space-y-2">
                <li>
                  <a
                    href="https://www.visvabharati.ac.in/computerscience.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Visva-Bharati University
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
