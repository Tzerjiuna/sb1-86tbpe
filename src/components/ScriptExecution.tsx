import React, { useState } from 'react';
import { Terminal, Play, Clock, List, Settings, Trash2 } from 'lucide-react';

export function ScriptExecution() {
  const [activeTab, setActiveTab] = useState('scripts');

  const scripts = [
    { id: 1, name: '备份脚本', type: 'Python', status: '运行中', lastRun: '2分钟前' },
    { id: 2, name: '日志清理', type: 'Shell', status: '已计划', lastRun: '1小时前' },
    { id: 3, name: '数据同步', type: 'Python', status: '失败', lastRun: '30分钟前' },
  ];

  return (
    <div className="flex-1 p-8 bg-dark-400">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-100">脚本执行</h2>
        <button className="flex items-center px-4 py-2 bg-surface-200 hover:bg-surface-300 text-gray-100 rounded-lg transition-all duration-200">
          <Play className="w-4 h-4 mr-2" />
          运行脚本
        </button>
      </div>

      <div className="glass-panel rounded-lg">
        <div className="flex space-x-4 p-6 border-b border-surface-200">
          <button
            onClick={() => setActiveTab('scripts')}
            className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
              activeTab === 'scripts' 
                ? 'bg-surface-300 text-gray-100' 
                : 'text-gray-400 hover:text-gray-100 hover:bg-surface-200'
            }`}
          >
            <Terminal className="w-4 h-4 mr-2" />
            脚本列表
          </button>
          <button
            onClick={() => setActiveTab('schedule')}
            className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
              activeTab === 'schedule' 
                ? 'bg-surface-300 text-gray-100' 
                : 'text-gray-400 hover:text-gray-100 hover:bg-surface-200'
            }`}
          >
            <Clock className="w-4 h-4 mr-2" />
            定时任务
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-surface-200">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  脚本名称
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  类型
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  状态
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  上次运行
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">
                  操作
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-200">
              {scripts.map((script) => (
                <tr key={script.id} className="hover:bg-surface-100">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">
                    {script.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                    {script.type}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      script.status === '运行中'
                        ? 'bg-green-900/30 text-green-400 border border-green-900/50'
                        : script.status === '已计划'
                        ? 'bg-blue-900/30 text-blue-400 border border-blue-900/50'
                        : 'bg-red-900/30 text-red-400 border border-red-900/50'
                    }`}>
                      {script.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                    {script.lastRun}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-gray-400 hover:text-gray-100 transition-colors mr-4">
                      <Play className="w-4 h-4" />
                    </button>
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