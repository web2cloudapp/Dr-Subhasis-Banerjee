import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <section className="profile">
        <div className="profile-content">
          <Image
            src="/subhasis-banerjee.jpg"
            alt="Dr. Subhasis Banerjee"
            width={384}
            height={384}
            className="profile-img"
          />
          <div className="profile-info">
            <h2>Dr. Subhasis Banerjee</h2>
            <p className="designation">Assistant Professor-III</p>
            <p><em>Department of Computer & System Sciences</em></p>
            <p><em>Siksha Bhavana (Institute of Science)</em></p>
            <p><em>Visva-Bharati</em></p>
            <p><em>Santiniketan – 731235</em></p>
            <p><em>Birbhum, WB, INDIA</em></p>
            <p>Date of joining: 11.03.2002</p>
            <p>E-mail: subhasis.banerjee@visva-bharati.ac.in</p>
            <p><a href="/cv" className="cv-link">Download CV</a></p>
          </div>
        </div>
      </section>

      <section className="academic-profiles">
        <h2>Academic Profiles & Researcher IDs</h2>
        <div className="profiles-grid">
          <div className="profile-item">
            <h3>Google Scholar</h3>
            <p><a href="https://scholar.google.com/citations?user=2tSem3wAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">2tSem3wAAAAJ</a></p>
          </div>
          <div className="profile-item">
            <h3>ORCID ID</h3>
            <p><a href="https://orcid.org/0009-0007-1154-7289" target="_blank" rel="noopener noreferrer">0009-0007-1154-7289</a></p>
          </div>
          <div className="profile-item">
            <h3>SCOPUS ID</h3>
            <p><a href="https://www.scopus.com/authid/detail.uri?authorId=59715624000" target="_blank" rel="noopener noreferrer">59715624000</a></p>
          </div>
          <div className="profile-item">
            <h3>IEEE Xplore</h3>
            <p><a href="https://ieeexplore.ieee.org/author/37085767208" target="_blank" rel="noopener noreferrer">37085767208</a></p>
          </div>
          <div className="profile-item">
            <h3>ResearchGate</h3>
            <p><a href="https://www.researchgate.net/profile/Subhasis-Banerjee-6" target="_blank" rel="noopener noreferrer">Subhasis-Banerjee-6</a></p>
          </div>
          <div className="profile-item">
            <h3>Vidwan</h3>
            <p><a href="https://vidwan.inflibnet.ac.in/profile/215837" target="_blank" rel="noopener noreferrer">Profile #215837</a></p>
          </div>
          <div className="profile-item">
            <h3>IRINS</h3>
            <p><a href="https://visvabharati.irins.org/profile/215837" target="_blank" rel="noopener noreferrer">Profile #215837</a></p>
          </div>
          <div className="profile-item">
            <h3>Facebook</h3>
            <p><a href="https://www.facebook.com/subhasis.banerjee.986" target="_blank" rel="noopener noreferrer">subhasis.banerjee.986</a></p>
          </div>
          <div className="profile-item">
            <h3>University Profile</h3>
            <p><a href="https://www.visvabharati.ac.in/computerscience.html" target="_blank" rel="noopener noreferrer">Department Page</a></p>
          </div>
        </div>
      </section>

      <section className="biography">
        <h2>Biography</h2>
        <p>I am currently an Assistant Professor-III in the Department of Computer and System Sciences in <em>Visva-Bharati University, Santiniketan</em>, West Bengal, India. I joined the department on March 11, 2002.</p>

        <p>My research interests include Wireless Communication, Distributed System, Internet Technology, Emerging Technology, and Ad-hoc Network.</p>

        <p>I completed my Ph.D. in Computer Science with the thesis titled "Design of some protocols for secured communication in ad hoc network".</p>

        <p>I have academic qualifications including M.Tech in Computer Science and Ph.D in Computer Science.</p>

        <p>I am currently supervising Ph.D. scholars who are pursuing their research under my guidance.</p>
      </section>
    </>
  );
}
