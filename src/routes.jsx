import {Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Dashboard from './pages/dashboard';

const Layout = () => {
  return (
    // <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />

    </Routes>
    // </Router>
  )
}

export default Layout
