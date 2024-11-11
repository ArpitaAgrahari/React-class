import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import LoanCalculatorPage from './pages/LoanCalculatorPage';
import PersonalInfoPage from './pages/PersonalInfoPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/loan-calculator">Loan Calculator</Link>
          <Link to="/personal-info-form">Personal Info Form</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/loan-calculator" element={<LoanCalculatorPage />} />
          <Route path="/personal-info-form" element={<PersonalInfoPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
