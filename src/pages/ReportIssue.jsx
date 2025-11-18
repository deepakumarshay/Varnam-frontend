import { useState } from 'react';
import ConnectivityBanner from '../components/ConnectivityBanner';

export default function ReportIssue() {
  const [method, setMethod] = useState('photo');
  const [anonymous, setAnonymous] = useState(false);
  const [gpsEnabled, setGpsEnabled] = useState(true);
  const [preview, setPreview] = useState('Broken Road');

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <ConnectivityBanner />
      <h1 className="text-2xl font-bold text-green-700 mb-4">Report an Issue</h1>
      <div className="mb-4">
        <label className="block font-semibold mb-2">Choose Reporting Method:</label>
        <div className="flex gap-4">
          {['photo', 'voice', 'text'].map((type) => (
            <button key={type} onClick={() => setMethod(type)} className={`px-4 py-2 rounded ${method === type ? 'bg-green-600 text-white' : 'bg-white border'}`}>{type.toUpperCase()}</button>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between mb-4">
        <label className="flex items-center gap-2"><input type="checkbox" checked={gpsEnabled} onChange={() => setGpsEnabled(!gpsEnabled)} /> GPS Tagging</label>
        <label className="flex items-center gap-2"><input type="checkbox" checked={anonymous} onChange={() => setAnonymous(!anonymous)} /> Anonymous</label>
      </div>
      <div className="mb-4">
        <label className="block font-semibold mb-2">AI Detected Issue:</label>
        <div className="p-4 bg-white border rounded shadow-sm"><p className="text-lg font-medium text-gray-700">{preview}</p></div>
      </div>
      <div className="mb-6">
        <label className="block font-semibold mb-2">Upload {method}:</label>
        <input type={method === 'photo' ? 'file' : 'text'} className="w-full p-2 border rounded" />
      </div>
      <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">Submit Report</button>
    </div>
  );
}