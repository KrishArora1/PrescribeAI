import React, { useEffect, useState } from 'react';
import {
  Routes,
  Route,
  useLocation,
  Navigate
} from 'react-router-dom';

import './css/style.css';
import './charts/ChartjsConfig';

// Import pages
import Dashboard from './pages/Dashboard';
import Auth from './pages/Auth';

function App() {
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto';
    window.scroll({ top: 0 });
    document.querySelector('html').style.scrollBehavior = '';
  }, []);

  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated');
    setIsAuthenticated(authStatus === 'true');
  }, []);

  return (
    <>
      <Routes>
        <Route 
          path="/" 
          element={
            isAuthenticated ? <Dashboard /> : <Navigate to="/auth" replace />
          } 
        />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </>
  );
}

export default App;