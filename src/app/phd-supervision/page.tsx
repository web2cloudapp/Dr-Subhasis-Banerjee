export default function PhDSupervision() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">PhD Supervision</h1>

      <p className="mb-6">I am currently supervising the following PhD scholars at the Department of Computer and System Sciences, Visva-Bharati University:</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Current PhD Student 1 */}
        <div className="border rounded-lg p-6 bg-white shadow-sm">
          <h3 className="text-xl font-semibold mb-2">Haranath Rakshit</h3>
          <p className="text-muted-foreground mb-1">Full-time Research Scholar</p>
          <p className="text-muted-foreground mb-1">Department of Computer and System Sciences</p>
          <p className="text-muted-foreground mb-1">Enrolled: 2022</p>
          <p className="mt-2 font-medium">Status: Currently pursuing under my supervision</p>
        </div>

        {/* Current PhD Student 2 */}
        <div className="border rounded-lg p-6 bg-white shadow-sm">
          <h3 className="text-xl font-semibold mb-2">Rajkumar Bhandari</h3>
          <p className="text-muted-foreground mb-1">Full-time Research Scholar</p>
          <p className="text-muted-foreground mb-1">Department of Computer and System Sciences</p>
          <p className="text-muted-foreground mb-1">Enrolled: 2023</p>
          <p className="mt-2 font-medium">Status: Currently pursuing under my supervision</p>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">For Prospective Students</h2>
        <p className="mb-4">If you are interested in pursuing research under my supervision, please send an email with the following:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Your detailed CV</li>
          <li>Research interests and proposal (1-2 pages)</li>
          <li>Academic credentials and qualifications</li>

        </ul>
      </div>
    </div>
  );
}
