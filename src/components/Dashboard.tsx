import React from 'react';
import { Activity } from 'lucide-react';

export function Dashboard() {
  return (
    <div className="flex-1 p-8 bg-dark-400">
      <div className="flex items-center mb-6">
        <Activity className="w-6 h-6 text-gray-100 mr-2" />
        <h2 className="text-2xl font-bold text-gray-100">仪表盘</h2>
      </div>
      <div className="glass-panel rounded-lg p-6">
        <p className="text-gray-300">欢迎使用管理系统</p>
      </div>
    </div>
  );
}