import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import Dashboard from './pages/Dashboard';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-slate-100 antialiased selection:bg-blue-500/30 selection:text-blue-200">
      {/* Top Navigation / Header */}
      <Header />
      
      {/* Sidebar + Main Content Body */}
      <div className="flex flex-1">
        {/* Left Navigation Sidebar */}
        <Sidebar />
        
        {/* Main Dashboard Panel */}
        <main className="flex-1 p-6 lg:p-8 bg-slate-950 overflow-y-auto">
          <div className="max-w-7xl mx-auto">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/transactions" element={<Dashboard />} />
              <Route path="/alerts" element={<Dashboard />} />
              <Route path="/topology" element={<Dashboard />} />
              {/* Fallback routing */}
              <Route path="*" element={<Dashboard />} />
            </Routes>
          </div>
        </main>
      </div>
    </div>
  );
}
