import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-green-700 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">GramaLink</h1>
      <nav className="flex gap-4 text-sm">
        <Link to="/report">Report</Link>
        <Link to="/status">Status</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/jury">Jury</Link>
        <Link to="/insights">Insights</Link>
      </nav>
    </header>
  );
}