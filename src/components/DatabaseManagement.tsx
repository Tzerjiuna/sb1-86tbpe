import React, { useState } from 'react';
import { Database, Plus, RefreshCw, Download, Users, Code } from 'lucide-react';

export function DatabaseManagement() {
  const [activeTab, setActiveTab] = useState('databases');

  const databases = [
    { id: 1, name: '生产数据库', type: 'PostgreSQL', size: '1.2 TB', status: '已连接' },
    { id: 2, name: '分析数据库', type: 'MySQL', size: '800 GB', status: '已连接' },
    { id: 3, name: '归档数据库', type: 'MongoDB', size: '2.1 TB', status: '未连接' },
  ];

  return (
    <div className="flex-1 p-8 bg-dark-400">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-100">数据库管理</h2>
        <button className="flex items-center px-4 py-2 bg-surface-200 hover:bg-surface-300 text-gray-100 rounded-lg transition-all duration-200">
          <Plus className="w-4 h-4 mr-2" />
          连接数据库
        </button>
      </div>

      <div className="glass-panel rounded-lg">
        <div className="flex space-x-4 p-6 border-b border-surface-200">
          <button
            onClick={() => setActiveTab('databases')}
            className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
              activeTab === 'databases' 
                ? 'bg-surface-300 text-gray-100' 
                : 'text-gray-400 hover:text-gray-100 hover:bg-surface-200'
            }`}
          >
            <Database className="w-4 h-4 mr-2" />
            数据库列表
          </button>
          <button
            onClick={() => setActiveTab('schema')}
            className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
              activeTab === 'schema' 
                ? 'bg-surface-300 text-gray-100' 
                : 'text-gray-400 hover:text-gray-100 hover:bg-surface-200'
            }`}
          >
            <Code className="w-4 h-4 mr-2" />
            数据表结构
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-surface-200">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  数据库名称
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  类型
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  容量
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  状态
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">
                  操作
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-200">
              {databases.map((db) => (
                <tr key={db.id} className="hover:bg-surface-100">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">
                    {db.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                    {db.type}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                    {db.size}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      db.status === '已连接'
                        ? 'bg-green-900/30 text-green-400 border border-green-900/50'
                        : 'bg-red-900/30 text-red-400 border border-red-900/50'
                    }`}>
                      {db.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-gray-400 hover:text-gray-100 transition-colors mr-4">
                      <RefreshCw className="w-4 h-4" />
                    </button>
                    <button className="text-gray-400 hover:text-gray-100 transition-colors mr-4">
                      <Download className="w-4 h-4" />
                    </button>
                    <button className="text-gray-400 hover:text-gray-100 transition-colors">
                      <Users className="w-4 h-4" />
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