import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MainPage from './pages/MainPage';
import AboutPage from './pages/AboutPage';
import FounderPage from './pages/FounderPage';
import ResourcesPage from './pages/ResourcesPage';
import AchievementsPage from './pages/AchievementsPage';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/founder" element={<FounderPage />} />
          <Route path="/mandatory-public-disclosure" element={<ResourcesPage />} />
          <Route path="/achievements" element={<AchievementsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;