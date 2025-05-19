export default function Publications() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">Publications</h1>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Research Publications</h2>
        <div className="space-y-6">
          {/* Publication 1 - from IEEE Xplore */}
          <div className="p-6 border rounded-lg bg-white shadow-sm">
            <h3 className="text-xl font-medium mb-2">Optimizing the Efficiency of Computational Platforms: Traditional vs. Containerized Setups</h3>
            <p className="mb-1"><strong>Authors:</strong> Rakshit, H., Banerjee, S.</p>
            <p className="mb-1"><strong>Conference:</strong> 2025 3rd International Conference on Intelligent Systems, Advanced Computing and Communication (ISACC)</p>
            <p className="mb-1"><strong>Year:</strong> 2025</p>
            <p className="mb-1"><strong>Abstract:</strong> Optimizing computational platforms in digital labs is vital for education, research, and enterprise applications. Traditional setups face resource inefficiencies, scalability constraints, and configuration conflicts, hindering performance. This paper compares traditional and containerized setups using Docker and Kubernetes, evaluating metrics such as CPU usage, memory consumption, latency, and setup time.</p>
            <p className="mb-1"><strong>Publisher:</strong> IEEE</p>
          </div>

          {/* Publication 2 - from IEEE Xplore */}
          <div className="p-6 border rounded-lg bg-white shadow-sm">
            <h3 className="text-xl font-medium mb-2">Scalability Evaluation on Zero Downtime Deployment in Kubernetes Cluster</h3>
            <p className="mb-1"><strong>Authors:</strong> Rakshit, H., Banerjee, S.</p>
            <p className="mb-1"><strong>Conference:</strong> 2024 IEEE Calcutta Conference (CALCON)</p>
            <p className="mb-1"><strong>Year:</strong> 2024</p>
            <p className="mb-1"><strong>Abstract:</strong> This article investigates the relative impact of zero downtime deployment strategies on the scalability of applications within Kubernetes clusters. Ensuring uninterrupted service delivery while managing changing workloads is crucial in modern software development. Strategies like rolling updates, blue-green deployments, and canary releases enable seamless updates without service interruptions.</p>
            <p className="mb-1"><strong>Publisher:</strong> IEEE</p>
          </div>

          {/* Publication 3 - from IEEE Xplore */}
          <div className="p-6 border rounded-lg bg-white shadow-sm">
            <h3 className="text-xl font-medium mb-2">Easy and expressive LLC contention model</h3>
            <p className="mb-1"><strong>Authors:</strong> Hemani, R., Banerjee, S., Guha, A.</p>
            <p className="mb-1"><strong>Conference:</strong> 2016 International Conference on High Performance Computing & Simulation (HPCS)</p>
            <p className="mb-1"><strong>Year:</strong> 2016</p>
            <p className="mb-1"><strong>Abstract:</strong> Last-Level-Cache (LLC) contention modeling is important to ensure good application performance on modern HPC platforms. Existing LLC contention models either rely on Performance Counters (PC), or, Cache Access Pattern (CAP) based data. The former models are easy-to-develop but inexpressive as their modeling power is limited to the contention levels observed during model construction, while the latter models are expressive but difficult to develop.</p>
            <p className="mb-1"><strong>Publisher:</strong> IEEE</p>
          </div>

          {/* Publication 4 - from IEEE Xplore */}
          <div className="p-6 border rounded-lg bg-white shadow-sm">
            <h3 className="text-xl font-medium mb-2">On the applicability of simple cache models for modern processors</h3>
            <p className="mb-1"><strong>Authors:</strong> Hemani, R., Banerjee, S., Guha, A.</p>
            <p className="mb-1"><strong>Conference:</strong> 2016 2nd International Conference on Green High Performance Computing (ICGHPC)</p>
            <p className="mb-1"><strong>Year:</strong> 2016</p>
            <p className="mb-1"><strong>Abstract:</strong> Cache performance estimation is the first step in assuring good cache utilization and hence application performance. However, it is difficult to create good cache models as the implementation of commercial caches is complex, constantly evolving, and, protected information. As a result many practical compilers use simple cache models such as Fully Associative LRU Cache (FALC) model.</p>
            <p className="mb-1"><strong>Publisher:</strong> IEEE</p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Research Areas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 border rounded-lg bg-white shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Cache Performance</h3>
            <p>Research on cache size, local memory, performance metrics, synthetic benchmarking, and access patterns in computing systems.</p>
          </div>

          <div className="p-6 border rounded-lg bg-white shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Containerization</h3>
            <p>Studies on container technologies like Docker and Kubernetes for optimizing deployment strategies and computational efficiency.</p>
          </div>

          <div className="p-6 border rounded-lg bg-white shadow-sm">
            <h3 className="text-xl font-semibold mb-2">High Performance Computing</h3>
            <p>Research on improving computing performance, resource utilization, and application optimization for modern processors.</p>
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
