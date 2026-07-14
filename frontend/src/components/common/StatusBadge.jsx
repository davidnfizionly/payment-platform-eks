import React from 'react';

export default function StatusBadge({ status = 'success', label }) {
  const styles = {
    success: {
      bg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
      dot: 'bg-emerald-500',
      ping: 'bg-emerald-400'
    },
    error: {
      bg: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
      dot: 'bg-rose-500',
      ping: 'bg-rose-400'
    },
    warning: {
      bg: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
      dot: 'bg-amber-500',
      ping: 'bg-amber-400'
    },
    info: {
      bg: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
      dot: 'bg-blue-500',
      ping: 'bg-blue-400'
    },
    offline: {
      bg: 'bg-slate-500/10 text-slate-400 border-slate-500/20',
      dot: 'bg-slate-500',
      ping: 'bg-slate-400'
    }
  };

  const currentStyle = styles[status] || styles.success;
  const displayLabel = label || status.toUpperCase();

  return (
    <span className={`inline-flex items-center space-x-1.5 px-2 py-0.5 rounded text-xs font-semibold border ${currentStyle.bg}`}>
      <span className="relative flex h-2 w-2">
        {status !== 'offline' && (
          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${currentStyle.ping}`}></span>
        )}
        <span className={`relative inline-flex rounded-full h-2 w-2 ${currentStyle.dot}`}></span>
      </span>
      <span>{displayLabel}</span>
    </span>
  );
}
