import React from 'react';

export default function FraudAlertPanel() {
  return (
    <div className="flex flex-col items-center justify-center py-6">
      {/* Icon representing alerts/shield */}
      <div className="p-3 bg-red-500/10 rounded-full text-red-400 mb-3">
        <svg className="w-8 h-8 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      </div>

      <span className="text-sm font-semibold text-slate-300">Fraud & Security Alerts</span>
      <span className="text-xs text-slate-500 mt-1">Anomalous transaction patterns and risk checks</span>

      {/* Wait indicator */}
      <div className="mt-6 flex items-center space-x-2 text-sm text-slate-500">
        <span className="h-1.5 w-1.5 bg-slate-500 rounded-full animate-bounce [animation-delay:0.4s]"></span>
        <span>En attente de données...</span>
      </div>
    </div>
  );
}
