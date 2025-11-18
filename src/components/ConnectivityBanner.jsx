import { useEffect, useState } from 'react';

export default function ConnectivityBanner() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const updateStatus = () => setIsOnline(navigator.onLine);
    window.addEventListener('online', updateStatus);
    window.addEventListener('offline', updateStatus);
    return () => {
      window.removeEventListener('online', updateStatus);
      window.removeEventListener('offline', updateStatus);
    };
  }, []);

  return (
    <div className={`text-center p-2 ${isOnline ? 'bg-green-100' : 'bg-red-100'}`}>
      {isOnline ? '✅ You are online' : '⚠️ You are offline. Reports will be saved locally.'}
    </div>
  );
}