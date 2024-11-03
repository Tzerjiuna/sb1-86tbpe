import React from 'react';
import { Plus, List, Settings, Trash2 } from 'lucide-react';

export function ServerManagement() {
  const servers = [
    { id: 1, name: '生产服务器', status: '运行中', load: '75%' },
    { id: 2, name: '预发布服务器', status: '运行中', load: '45%' },
    { id: 3, name: '开发服务器', status: '维护中', load: '0%' },
  ];

  return (
    <div className="flex-1 p-8 bg-dark-400">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-100">服务器管理</h2>
        <button className="flex items-center px-4 py-2 bg-surface-200 hover:bg-surface-300 text-gray-100 rounded-lg transition-all duration-200">
          <Plus className="w-4 h-4 mr-2" />
          添加服务器
        </button>
      </div>

      <div className="glass-panel rounded-lg">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-surface-200">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  服务器名称
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  状态
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  负载
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">
                  操作
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-200">
              {servers.map((server) => (
                <tr key={server.id} className="hover:bg-surface-100">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">
                    {server.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      server.status === '运行中' 
                        ? 'bg-green-900/30 text-green-400 border border-green-900/50' 
                        : 'bg-yellow-900/30 text-yellow-400 border border-yellow-900/50'
                    }`}>
                      {server.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                    {server.load}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-gray-400 hover:text-gray-100 transition-colors mr-4">
                      <Settings className="w-4 h-4" />
                    </button>
                    <button className="text-gray-400 hover:text-red-400 transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}