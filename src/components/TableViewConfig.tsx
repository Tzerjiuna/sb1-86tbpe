import React, { useState } from 'react';
import { Table, Plus, Filter, SortAsc, Settings, Trash2 } from 'lucide-react';

export function TableViewConfig() {
  const [activeTab, setActiveTab] = useState('views');

  const views = [
    { id: 1, name: '用户列表', table: 'user_info', filters: 2, columns: 8, status: '已启用' },
    { id: 2, name: '交易报告', table: 'transaction_logs', filters: 4, columns: 6, status: '已启用' },
    { id: 3, name: '活跃用户', table: 'user_info', filters: 1, columns: 5, status: '已禁用' },
  ];

  return (
    <div className="flex-1 p-8 bg-dark-400">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-100">表格配置</h2>
        <button className="flex items-center px-4 py-2 bg-surface-200 hover:bg-surface-300 text-gray-100 rounded-lg transition-all duration-200">
          <Plus className="w-4 h-4 mr-2" />
          创建视图
        </button>
      </div>

      <div className="glass-panel rounded-lg">
        <div className="flex space-x-4 p-6 border-b border-surface-200">
          <button
            onClick={() => setActiveTab('views')}
            className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
              activeTab === 'views' 
                ? 'bg-surface-300 text-gray-100' 
                : 'text-gray-400 hover:text-gray-100 hover:bg-surface-200'
            }`}
          >
            <Table className="w-4 h-4 mr-2" />
            视图列表
          </button>
          <button
            onClick={() => setActiveTab('filters')}
            className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
              activeTab === 'filters' 
                ? 'bg-surface-300 text-gray-100' 
                : 'text-gray-400 hover:text-gray-100 hover:bg-surface-200'
            }`}
          >
            <Filter className="w-4 h-4 mr-2" />
            过滤器
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-surface-200">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  视图名称
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  数据表
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  过滤器数量
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
              {views.map((view) => (
                <tr key={view.id} className="hover:bg-surface-100">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">
                    {view.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                    {view.table}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                    {view.filters}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      view.status === '已启用'
                        ? 'bg-green-900/30 text-green-400 border border-green-900/50'
                        : 'bg-red-900/30 text-red-400 border border-red-900/50'
                    }`}>
                      {view.status}
                    </span>
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