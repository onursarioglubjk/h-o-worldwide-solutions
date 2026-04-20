import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import RequestSample from './pages/RequestSample';
import AdminDashboard from './pages/AdminDashboard';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/request" element={<RequestSample />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
