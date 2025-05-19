export default function Research() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">Research</h1>

      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Research Interests</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="border rounded-lg p-6 bg-white shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Wireless Communication</h3>
            <p>Research in wireless network protocols, communication systems, and wireless security mechanisms.</p>
          </div>

          <div className="border rounded-lg p-6 bg-white shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Distributed Systems</h3>
            <p>Studying distributed computing architectures, algorithms, and optimization techniques for distributed environments.</p>
          </div>

          <div className="border rounded-lg p-6 bg-white shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Internet Technology</h3>
            <p>Research on internet protocols, web technologies, and network infrastructure advancements.</p>
          </div>


       
          <div className="border rounded-lg p-6 bg-white shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Ad-hoc Networks</h3>
            <p>Specialized research in ad-hoc network protocols, security mechanisms, and performance optimization.</p>
          </div>

          <div className="border rounded-lg p-6 bg-white shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Emerging Technologies (IOT, Cloud Computing, Cryptography)</h3>
            <p>Exploring cutting-edge technologies and their applications in computer science and information systems.</p>
          </div>
        </div>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Recent Research Focus</h2>
        <div className="border rounded-lg p-6 bg-white shadow-sm mb-6">
          <h3 className="text-xl font-semibold mb-2">Computational Platforms Optimization</h3>
          <p className="mb-4">
            Research on optimizing computational platforms in digital labs for education, research, and enterprise applications.
            This includes comparing traditional and containerized setups using Docker and Kubernetes, with evaluation metrics such as
            CPU usage, memory consumption, latency, and setup time.
          </p>
        </div>

        <div className="border rounded-lg p-6 bg-white shadow-sm">
          <h3 className="text-xl font-semibold mb-2">Zero Downtime Deployment Strategies</h3>
          <p className="mb-4">
            Investigating the impact of zero downtime deployment strategies on the scalability of applications within Kubernetes clusters.
            Studying strategies like rolling updates, blue-green deployments, and canary releases to enable seamless updates without
            service interruptions.
          </p>
        </div>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-4">PhD Thesis</h2>
        <div className="border rounded-lg p-6 bg-white shadow-sm">
          <h3 className="text-xl font-semibold mb-2">Design of some protocols for secured communication in ad hoc network</h3>
          <p className="mb-4">
            My doctoral research focused on developing secure communication protocols specifically designed for ad hoc networks.
            The research addressed challenges like network security, efficient routing, and resource optimization in dynamic network environments.
          </p>
          <p>
            The thesis proposed novel protocols that enhance security while maintaining network performance in resource-constrained ad hoc network scenarios.
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Research Projects</h2>
        <div className="space-y-6">
          <div className="border rounded-lg p-6 bg-white shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Secure Communication Protocols for Ad-hoc Networks</h3>
            <p className="mb-2">This ongoing research project focuses on developing innovative security protocols for ad-hoc networks with applications in various domains.</p>
            <p><strong>Status:</strong> Ongoing</p>
          </div>

          <div className="border rounded-lg p-6 bg-white shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Performance Optimization in Distributed Systems</h3>
            <p className="mb-2">Research on improving the performance of distributed systems through novel algorithms and optimization techniques.</p>
            <p><strong>Status:</strong> Ongoing</p>
          </div>

          <div className="border rounded-lg p-6 bg-white shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Containerization for Academic Environments</h3>
            <p className="mb-2">Exploring the use of containerization technologies to improve computational resource utilization in academic labs and research environments.</p>
            <p><strong>Status:</strong> Ongoing</p>
          </div>
        </div>
      </div>
    </div>
  );
}
