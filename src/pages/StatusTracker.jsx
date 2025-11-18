import { useState } from 'react';

const mockStatus = [
  { id: 1, type: 'Broken Road', location: 'Ward 3', status: 'Pending' },
  { id: 2, type: 'Drainage Blockage', location: 'Ward 7', status: 'In Progress' },
  { id: 3, type: 'Street Light Fault', location: 'Ward 2', status: 'Resolved' },
];

export default function StatusTracker() {
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All' ? mockStatus : mockStatus.filter((i) => i.type === filter);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-green-700 mb-4">Issue Status Tracker</h1>

      {/* Filter */}
      <div className="mb-4">
        <label className="block font-semibold mb-2">Filter by Issue Type:</label>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="p-2 border rounded"
        >
          <option>All</option>
          <option>Broken Road</option>
          <option>Drainage Blockage</option>
          <option>Street Light Fault</option>
        </select>
      </div>

      {/* Map Placeholder */}
      <div className="mb-6 bg-white border rounded p-4 shadow-sm">
        <p className="text-gray-600">🗺️ Map View Placeholder (Google Maps API can be integrated)</p>
      </div>

      {/* Timeline Cards */}
      <div className="grid gap-4">
        {filtered.map((issue) => (
          <div key={issue.id} className="bg-white p-4 rounded shadow-md border">
            <h2 className="text-lg font-semibold text-gray-800">{issue.type}</h2>
            <p className="text-sm text-gray-600">📍 {issue.location}</p>
            <p className="text-sm mt-1">
              Status:{' '}
              <span
                className={`font-medium ${
                  issue.status === 'Resolved'
                    ? 'text-green-600'
                    : issue.status === 'In Progress'
                    ? 'text-yellow-600'
                    : 'text-red-600'
                }`}
              >
                {issue.status}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}