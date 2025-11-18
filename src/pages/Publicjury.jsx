import { useState } from 'react';

export default function Publicjury() {
  const [vote, setVote] = useState(null);
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (vote && rating > 0) {
      setSubmitted(true);
    } else {
      alert('Please vote and rate before submitting.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-green-700 mb-4">Public Jury Panel</h1>

      {/* Voting Section */}
      <div className="mb-4">
        <label className="block font-semibold mb-2">Was the issue resolved?</label>
        <div className="flex gap-4">
          <button
            onClick={() => setVote('Yes')}
            className={`px-4 py-2 rounded ${
              vote === 'Yes' ? 'bg-green-600 text-white' : 'bg-white border'
            }`}
          >
            ✅ Yes
          </button>
          <button
            onClick={() => setVote('No')}
            className={`px-4 py-2 rounded ${
              vote === 'No' ? 'bg-red-600 text-white' : 'bg-white border'
            }`}
          >
            ❌ No
          </button>
        </div>
      </div>

      {/* Star Rating */}
      <div className="mb-4">
        <label className="block font-semibold mb-2">Rate the resolution:</label>
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              onClick={() => setRating(star)}
              className={`text-xl ${
                rating >= star ? 'text-yellow-500' : 'text-gray-400'
              }`}
            >
              ★
            </button>
          ))}
        </div>
      </div>

      {/* Submit */}
      <button
        onClick={handleSubmit}
        className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
      >
        Submit
      </button>

      {submitted && (
        <p className="mt-4 text-green-700 font-semibold">
          Thank you! Your feedback has been submitted.
        </p>
      )}
    </div>
  );
}
