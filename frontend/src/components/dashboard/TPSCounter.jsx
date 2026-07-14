import React from 'react';

export default function TPSCounter() {
  return (
    <div className="flex flex-col items-center justify-center py-6">
      {/* Icon representing transactions metric */}
      <div className="p-3 bg-blue-500/10 rounded-full text-blue-400 mb-3">
        <svg className="w-8 h-8 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </div>
      
      {/* Dynamic metric value placeholder */}
      <span className="text-4xl font-mono font-bold text-slate-300">--</span>
      <span className="text-xs text-slate-500 uppercase font-semibold tracking-wider mt-1">TPS (Trans. Per Second)</span>
      
      {/* Wait indicator */}
      <div className="mt-4 flex items-center space-x-2 text-sm text-slate-500">
        <span className="h-1.5 w-1.5 bg-slate-500 rounded-full animate-bounce"></span>
        <span>En attente de données...</span>
      </div>
    </div>
  );
}
