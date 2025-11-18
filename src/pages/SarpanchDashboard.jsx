import { useState } from 'react';

const mockIssues = [
  {
    id: 1,
    type: 'Broken Road',
    location: 'Ward 3, Baunsi',
    status: 'Pending',
    feedbackScore: 3.5,
  },
  {
    id: 2,
    type: 'Drainage Blockage',
    location: 'Ward 7, Banka',
    status: 'In Progress',
    feedbackScore: 4.2,
  },
  {
    id: 3,
    type: 'Street Light Fault',
    location: 'Ward 2, Baunsi',
    status: 'Resolved',
    feedbackScore: 4.8,
  },
];

export default function SarpanchDashboard() {
  const [issues, setIssues] = useState(mockIssues);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-green-700 mb-4">Sarpanch Dashboard</h1>

      <div className="grid gap-4">
        {issues.map((issue) => (
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
            <p className="text-sm mt-1">Feedback Score: ⭐ {issue.feedbackScore}</p>
          </div>
        ))}
      </div>
    </div>
  );
}