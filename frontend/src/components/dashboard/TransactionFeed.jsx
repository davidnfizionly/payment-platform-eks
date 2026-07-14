import React from 'react';

export default function TransactionFeed() {
  return (
    <div className="flex flex-col items-center justify-center py-6">
      {/* Icon representing feed/list */}
      <div className="p-3 bg-blue-500/10 rounded-full text-blue-400 mb-3">
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
        </svg>
      </div>

      <span className="text-sm font-semibold text-slate-300">Transaction Stream</span>
      <span className="text-xs text-slate-500 mt-1">Live updates of incoming mobile payments</span>

      {/* Wait indicator */}
      <div className="mt-6 flex items-center space-x-2 text-sm text-slate-500">
        <span className="h-1.5 w-1.5 bg-slate-500 rounded-full animate-bounce [animation-delay:0.2s]"></span>
        <span>En attente de données...</span>
      </div>
    </div>
  );
}
