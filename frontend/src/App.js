import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import SearchPage from './components/SearchPage';
import CompanyPage from './components/CompanyPage';
import LoginPage from './components/LoginPage';
import SignupForm from './components/SignupForm';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/company/:id" element={<CompanyPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={ <SignupForm />} />
      </Routes>
    </Router>
  );
};

export default App;
