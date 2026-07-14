import React from 'react';
import Card from '../components/common/Card';
import TPSCounter from '../components/dashboard/TPSCounter';
import TransactionFeed from '../components/dashboard/TransactionFeed';
import FraudAlertPanel from '../components/dashboard/FraudAlertPanel';
import MeshTopologyView from '../components/dashboard/MeshTopologyView';

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Page Title / Header Info */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-slate-800 pb-5">
        <div>
          <h2 className="text-xl font-bold text-slate-100">Ops Command Center</h2>
          <p className="text-sm text-slate-400 mt-1">Real-time payment transaction monitoring, analytics, and service mesh health.</p>
        </div>
        <div className="mt-4 md:mt-0 flex items-center space-x-3">
          {/* Refresh status */}
          <span className="text-xs text-slate-500 flex items-center space-x-1.5">
            <span className="h-1.5 w-1.5 bg-blue-500 rounded-full animate-pulse"></span>
            <span>Live Streaming</span>
          </span>
        </div>
      </div>

      {/* Widgets Responsive Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Transactions Per Second (TPS)">
          <TPSCounter />
        </Card>

        <Card title="Live Transaction Feed">
          <TransactionFeed />
        </Card>

        <Card title="Fraud & Risk Monitoring">
          <FraudAlertPanel />
        </Card>

        <Card title="Service Mesh & Nodes Topology">
          <MeshTopologyView />
        </Card>
      </div>
    </div>
  );
}
