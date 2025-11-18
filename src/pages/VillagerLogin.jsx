import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function VillagerLogin() {
  const [mobile, setMobile] = useState('');
  const [otp, setOtp] = useState('');
  const [language, setLanguage] = useState('English');
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const handleSendOtp = () => {
    if (mobile.length === 10) setStep(2);
    else alert('Enter valid mobile number.');
  };

  const handleVerifyOtp = () => {
    if (otp.length === 4) navigate('/report');
    else alert('Enter valid OTP.');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <h1 className="text-3xl font-bold text-green-700 mb-6">Villager Login</h1>
      <select value={language} onChange={(e) => setLanguage(e.target.value)} className="w-full max-w-md p-3 mb-4 border rounded">
        <option>English</option>
        <option>Hindi</option>
      </select>
      {step === 1 && (
        <>
          <input type="tel" placeholder="Mobile Number" value={mobile} onChange={(e) => setMobile(e.target.value)} className="w-full max-w-md p-3 mb-4 border rounded" />
          <button onClick={handleSendOtp} className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">Send OTP</button>
        </>
      )}
      {step === 2 && (
        <>
          <input type="text" placeholder="Enter OTP" value={otp} onChange={(e) => setOtp(e.target.value)} className="w-full max-w-md p-3 mb-4 border rounded" />
          <button onClick={handleVerifyOtp} className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">Verify & Continue</button>
        </>
      )}
      <button onClick={() => navigate('/report')} className="mt-6 text-sm text-blue-600 underline">Continue as Guest</button>
    </div>
  );
}