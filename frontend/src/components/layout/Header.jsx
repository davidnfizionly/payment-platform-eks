import React from 'react';

export default function Header() {
  return (
    <header className="h-16 bg-slate-900 border-b border-slate-800 flex items-center justify-between px-6 sticky top-0 z-50">
      <div className="flex items-center space-x-3">
        {/* Pulsing Ops Center Logo Placeholder */}
        <div className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
        </div>
        <h1 className="text-lg font-semibold text-slate-100 tracking-wide">
          Payment Platform <span className="text-slate-500 font-normal">|</span> <span className="text-blue-400">Ops Dashboard</span>
        </h1>
      </div>
      
      <div className="flex items-center space-x-4">
        {/* Environment Badge */}
        <span className="px-2.5 py-1 text-xs font-semibold rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
          PROD-ENVIRONMENT
        </span>
        {/* System Time */}
        <span className="text-xs font-mono text-slate-400">
          UTC: {new Date().toISOString().slice(11, 19)}
        </span>
      </div>
    </header>
  );
}
