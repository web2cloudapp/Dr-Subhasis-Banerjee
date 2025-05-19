export default function Publications() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">Publications</h1>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Research Publications</h2>
        <div className="space-y-6">
          {/* Publication 1 - from IEEE Xplore */}
          <div className="p-6 border rounded-lg bg-white shadow-sm">
            <h3 className="text-xl font-medium mb-2">
              Optimizing the Efficiency of Computational Platforms: Traditional vs. Containerized Setups
            </h3>
            <p className="mb-1">
              <strong>Authors:</strong> Rakshit, H., Banerjee, S.
            </p>
            <p className="mb-1">
              <strong>Conference:</strong> 2025 3rd International Conference on Intelligent Systems, Advanced Computing and Communication (ISACC)
            </p>
            <p className="mb-1">
              <strong>Year:</strong> 2025
            </p>
            <p className="mb-1">
              <strong>Abstract:</strong> Optimizing computational platforms in digital labs is vital for education, research, and enterprise applications. Traditional setups face res[...]
            </p>
            <p className="mb-1">
              <strong>Publisher:</strong> IEEE
            </p>
          </div>

          {/* Publication 2 - from IEEE Xplore */}
          <div className="p-6 border rounded-lg bg-white shadow-sm">
            <h3 className="text-xl font-medium mb-2">
              Scalability Evaluation on Zero Downtime Deployment in Kubernetes Cluster
            </h3>
            <p className="mb-1">
              <strong>Authors:</strong> Rakshit, H., Banerjee, S.
            </p>
            <p className="mb-1">
              <strong>Conference:</strong> 2024 IEEE Calcutta Conference (CALCON)
            </p>
            <p className="mb-1">
              <strong>Year:</strong> 2024
            </p>
            <p className="mb-1">
              <strong>Abstract:</strong> This article investigates the relative impact of zero downtime deployment strategies on the scalability of applications within Kubernetes clu[...]
            </p>
            <p className="mb-1">
              <strong>Publisher:</strong> IEEE
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 p-6 border rounded-lg bg-slate-50">
        <h3 className="text-lg font-semibold mb-2">Note:</h3>
        <p>
          For the most up-to-date list of publications, please visit my{" "}
          <a
            href="https://scholar.google.com/citations?user=2tSem3wAAAAJ&hl=en"
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Scholar Profile
          </a>.
        </p>
      </div>
    </div>
  );
}
