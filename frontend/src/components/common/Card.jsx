import React from 'react';

export default function Card({ title, children, className = '' }) {
  return (
    <div className={`bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:border-slate-700/80 ${className}`}>
      {title && (
        <div className="px-5 py-4 border-b border-slate-800 flex items-center justify-between">
          <h3 className="text-sm font-semibold text-slate-200 tracking-wide uppercase">
            {title}
          </h3>
          {/* Dashboard utility menu dots */}
          <div className="flex space-x-1">
            <span className="h-1 w-1 bg-slate-500 rounded-full"></span>
            <span className="h-1 w-1 bg-slate-500 rounded-full"></span>
            <span className="h-1 w-1 bg-slate-500 rounded-full"></span>
          </div>
        </div>
      )}
      <div className="p-5 flex flex-col justify-between h-full min-h-[160px] text-slate-400">
        {children}
      </div>
    </div>
  );
}
