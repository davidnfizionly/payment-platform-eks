import React from 'react';

export default function MeshTopologyView() {
  return (
    <div className="flex flex-col items-center justify-center py-6">
      {/* Icon representing mesh / network topology */}
      <div className="p-3 bg-blue-500/10 rounded-full text-blue-400 mb-3">
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      </div>

      <span className="text-sm font-semibold text-slate-300">Service Mesh Topology</span>
      <span className="text-xs text-slate-500 mt-1">Inter-service latency and routing path health</span>

      {/* Wait indicator */}
      <div className="mt-6 flex items-center space-x-2 text-sm text-slate-500">
        <span className="h-1.5 w-1.5 bg-slate-500 rounded-full animate-bounce [animation-delay:0.6s]"></span>
        <span>En attente de données...</span>
      </div>
    </div>
  );
}
