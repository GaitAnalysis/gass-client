import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Register from './register';
import Login from './login';
import Upload from './upload';
import Analysis from './analysis';

function App() {
  const isTokenSet = !!localStorage.getItem('token'); // Check if 'token' is set in localStorage

  const handleLogoff = () => {
    localStorage.removeItem('token'); // Remove 'token' from localStorage
    window.location.reload(); // Reload the page to reflect the changes
  };

  return (
    <Router>
      <div>
        <nav style={{ backgroundColor: 'lightblue', padding: '10px' }}>
          <ul style={{ listStyleType: 'none', display: 'flex', justifyContent: 'space-between' }}>
            {!isTokenSet && (
              <>
                <li>
                  <Link to="/register" style={{ textDecoration: 'none', color: 'white' }}>
                    Register
                  </Link>
                </li>
                <li style={{backgroundColor: 'white' ,color: 'lightblue', paddingLeft: '10px', paddingRight: '10px', fontSize: 20}}>
                  GASS Gait Analyzer
                </li>
                <li>
                  <Link to="/login" style={{ textDecoration: 'none', color: 'white' }}>
                    Login
                  </Link>
                </li>
              </>
            )}
            {isTokenSet && (
              <>
                <li>
                  <Link to="/upload" style={{ textDecoration: 'none', color: 'white' }}>
                    Upload
                  </Link>
                </li>
                <li>
                  <Link to="/analysis" style={{ textDecoration: 'none', color: 'white' }}>
                    Analysis
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleLogoff}
                    style={{
                      textDecoration: 'none',
                      color: 'white',
                      backgroundColor: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      outline: 'none',
                    }}
                  >
                    Logoff
                  </button>
                </li>
              </>
            )}
          </ul>
        </nav>

        <Routes>
          {!isTokenSet && <Route path="/register" element={<Register />} />}
          {!isTokenSet && <Route path="/login" element={<Login />} />}
          {isTokenSet && (
            <>
              <Route path="/upload" element={<Upload />} />
              <Route path="/analysis" element={<Analysis />} />
            </>
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
