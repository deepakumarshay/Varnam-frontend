import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import VillagerLogin from './pages/VillagerLogin';
import ReportIssue from './pages/ReportIssue';
import SarpanchDashboard from './pages/SarpanchDashboard';
import StatusTracker from './pages/StatusTracker';
import PublicJury from './pages/PublicJury';
import Insights from './pages/Insights';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/villager-login" element={<VillagerLogin />} />
        <Route path="/report" element={<ReportIssue />} />
        <Route path="/dashboard" element={<SarpanchDashboard />} />
        <Route path="/status" element={<StatusTracker />} />
        <Route path="/jury" element={<PublicJury />} />
        <Route path="/insights" element={<Insights />} />
      </Routes>
    </Router>
  );
}