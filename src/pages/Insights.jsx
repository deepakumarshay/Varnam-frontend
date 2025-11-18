export default function Insights() {
  const metrics = {
    totalIssues: 128,
    resolved: 96,
    pending: 32,
    resolutionRate: '75%',
    trustScore: '82%',
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-green-700 mb-4">Project Insights</h1>

      {/* Analytics Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded shadow-md border">
          <h2 className="text-lg font-semibold text-gray-800">Total Issues</h2>
          <p className="text-2xl text-green-700 font-bold">{metrics.totalIssues}</p>
        </div>
        <div className="bg-white p-4 rounded shadow-md border">
          <h2 className="text-lg font-semibold text-gray-800">Resolved</h2>
          <p className="text-2xl text-green-700 font-bold">{metrics.resolved}</p>
        </div>
        <div className="bg-white p-4 rounded shadow-md border">
          <h2 className="text-lg font-semibold text-gray-800">Pending</h2>
          <p className="text-2xl text-red-600 font-bold">{metrics.pending}</p>
        </div>
        <div className="bg-white p-4 rounded shadow-md border">
          <h2 className="text-lg font-semibold text-gray-800">Resolution Rate</h2>
          <p className="text-2xl text-yellow-600 font-bold">{metrics.resolutionRate}</p>
        </div>
        <div className="bg-white p-4 rounded shadow-md border">
          <h2 className="text-lg font-semibold text-gray-800">Trust Score</h2>
          <p className="text-2xl text-blue-600 font-bold">{metrics.trustScore}</p>
        </div>
      </div>

      {/* Heatmap Placeholder */}
      <div className="bg-white p-6 rounded shadow-md border">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">Regional Complaint Heatmap</h2>
        <div className="h-48 bg-gray-200 flex items-center justify-center text-gray-500">
          🗺️ Heatmap Placeholder (Integrate Mapbox or Google Maps API)
        </div>
      </div>
    </div>
  );
}