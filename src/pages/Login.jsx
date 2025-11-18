import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <h1 className="text-3xl font-bold text-green-700 mb-6">Login</h1>
      <button
        onClick={() => navigate('/villager-login')}
        className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
      >
        Login as Villager
      </button>
    </div>
  );
}