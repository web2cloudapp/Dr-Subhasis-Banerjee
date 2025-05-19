export default function Publications() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">Publications</h1>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Research Publications</h2>
        <div className="space-y-6">
         {/* Publication 1 – from IEEE Xplore */}
<div className="p-6 border rounded-lg bg-white shadow-sm">
  <h3 className="text-xl font-medium mb-2">
    Scalability Evaluation on Zero Downtime Deployment in Kubernetes Cluster
  </h3>
  <p className="mb-1"><strong>Authors:</strong> Rakshit, H.; Banerjee, S.</p>
  <p className="mb-1"><strong>Conference:</strong> 2024 IEEE Calcutta Conference (CALCON)</p>
  <p className="mb-1"><strong>Year:</strong> 2024</p>
  <p className="mb-1"><strong>Abstract:</strong> This article investigates the impact of zero‑downtime
    deployment strategies—rolling updates, blue‑green deployments, and canary releases—on the
    scalability of applications within Kubernetes clusters, ensuring uninterrupted service delivery
    under changing workloads.</p>
  <p className="mb-1"><strong>Publisher:</strong> IEEE</p>
</div>

{/* Publication 2 – from IJCSMC */}
<div className="p-6 border rounded-lg bg-white shadow-sm">
  <h3 className="text-xl font-medium mb-2">
    Secure SMS Communication in Android‑Based System with Two‑Stage Protection
  </h3>
  <p className="mb-1"><strong>Authors:</strong> Banerjee, S.; Roy, U.</p>
  <p className="mb-1"><strong>Journal:</strong> International Journal of Computer Science &amp;
    Mobile Computing 4 (8), 1057‑1064</p>
  <p className="mb-1"><strong>Year:</strong> 2015</p>
  <p className="mb-1"><strong>Abstract:</strong> Proposes a dual‑layer encryption framework combining
    public‑key cryptography with symmetric ciphers to mitigate eavesdropping risks in Android SMS
    messaging.</p>
  <p className="mb-1"><strong>Publisher:</strong> IJCSMC</p>
</div>

{/* Publication 3 – Conference / Pre‑print */}
<div className="p-6 border rounded-lg bg-white shadow-sm">
  <h3 className="text-xl font-medium mb-2">
    Flexible Hybrid Cryptosystem HRSE for Education, Experimentation and Innovation
  </h3>
  <p className="mb-1"><strong>Authors:</strong> Rakshit, H.; Banerjee, S.</p>
  <p className="mb-1"><strong>Conference / Repository:</strong> —</p>
  <p className="mb-1"><strong>Year:</strong> 2025</p>
  <p className="mb-1"><strong>Abstract:</strong> Introduces HRSE, a pluggable cryptographic sandbox
    that lets educators and researchers seamlessly switch among RSA, ECC, lattice‑based, and hybrid
    post‑quantum schemes for hands‑on evaluation.</p>
  <p className="mb-1"><strong>Publisher:</strong> —</p>
</div>

{/* Publication 4 – Conference / Pre‑print */}
<div className="p-6 border rounded-lg bg-white shadow-sm">
  <h3 className="text-xl font-medium mb-2">
    Hybrid Resilience (H/R) Testing Model: AI‑Driven Zero Downtime Deployment for Kubernetes
  </h3>
  <p className="mb-1"><strong>Authors:</strong> Rakshit, H.; Banerjee, S.</p>
  <p className="mb-1"><strong>Conference / Repository:</strong> —</p>
  <p className="mb-1"><strong>Year:</strong> 2025</p>
  <p className="mb-1"><strong>Abstract:</strong> Presents an AI‑powered fault‑injection and recovery
    framework that scores a Kubernetes cluster’s ability to maintain service‑level objectives during
    rolling upgrades.</p>
  <p className="mb-1"><strong>Publisher:</strong> —</p>
</div>

{/* Publication 5 – from IEEE Xplore */}
<div className="p-6 border rounded-lg bg-white shadow-sm">
  <h3 className="text-xl font-medium mb-2">
    Optimizing the Efficiency of Computational Platforms: Traditional vs. Containerized Setups
  </h3>
  <p className="mb-1"><strong>Authors:</strong> Rakshit, H.; Banerjee, S.</p>
  <p className="mb-1"><strong>Conference:</strong> 2025 3rd International Conference on Intelligent
    Systems, Advanced Computing and Communication (ISACC)</p>
  <p className="mb-1"><strong>Year:</strong> 2025</p>
  <p className="mb-1"><strong>Abstract:</strong> Benchmarks CPU usage, memory consumption, latency,
    and setup time across bare‑metal, virtual‑machine, and Docker/Kubernetes environments to quantify
    resource gains from containerization.</p>
  <p className="mb-1"><strong>Publisher:</strong> IEEE</p>
</div>

{/* Publication 6 – from IJIRD */}
<div className="p-6 border rounded-lg bg-white shadow-sm">
  <h3 className="text-xl font-medium mb-2">
    Two‑Way Authentication Protocol for Android‑Based Applications
  </h3>
  <p className="mb-1"><strong>Authors:</strong> Subhasis, B.; Utpal, R.</p>
  <p className="mb-1"><strong>Journal:</strong> International Journal of Innovative Research and
    Development 5 (2 Special Issue)</p>
  <p className="mb-1"><strong>Year:</strong> 2016</p>
  <p className="mb-1"><strong>Abstract:</strong> Describes a mutual‑authentication mechanism that
    combines device‑fingerprinting with one‑time credentials to secure sensitive Android workflows
    such as mobile banking.</p>
  <p className="mb-1"><strong>Publisher:</strong> IJIRD</p>
</div>

{/* Publication 7 – from IUP JIT */}
<div className="p-6 border rounded-lg bg-white shadow-sm">
  <h3 className="text-xl font-medium mb-2">
    Secured Cluster‑Based Routing Protocol
  </h3>
  <p className="mb-1"><strong>Authors:</strong> Banerjee, S.; Roy, U.; Begum, S.</p>
  <p className="mb-1"><strong>Journal:</strong> IUP Journal of Information Technology 5 (4)</p>
  <p className="mb-1"><strong>Year:</strong> 2009</p>
  <p className="mb-1"><strong>Abstract:</strong> Proposes a lightweight key‑distribution and intrusion
    detection scheme for securing hierarchical ad‑hoc networks while keeping routing overhead low.</p>
  <p className="mb-1"><strong>Publisher:</strong> IUP JIT</p>
</div>


         
        </div>
      </div>



      <div className="mt-12 p-6 border rounded-lg bg-slate-50">
        <h3 className="text-lg font-semibold mb-2">Note:</h3>
        <p>For the most up-to-date list of publications, please visit my <a href="https://scholar.google.com/citations?user=2tSem3wAAAAJ&hl=en" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Google Scholar</a>, <a href="https://ieeexplore.ieee.org/author/37085767208" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">IEEE Xplore</a>, or <a href="https://visvabharati.irins.org/profile/215837" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">IRINS</a> profile.</p>
      </div>
    </div>
  );
}
