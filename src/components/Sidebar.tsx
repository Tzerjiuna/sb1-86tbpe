import React from 'react';
import { Server, Database, Table, Terminal, Home, FileJson, Sun, Moon } from 'lucide-react';
import { ActiveSection } from '../App';
import { useTheme } from '../context/ThemeContext';

interface SidebarProps {
  activeSection: ActiveSection;
  onSectionChange: (section: ActiveSection) => void;
}

export function Sidebar({ activeSection, onSectionChange }: SidebarProps) {
  const { theme, toggleTheme } = useTheme();
  
  const menuItems = [
    { id: 'dashboard' as const, icon: Home, label: '仪表盘' },
    { id: 'json' as const, icon: FileJson, label: 'JSON编辑器' },
    { id: 'server' as const, icon: Server, label: '服务器管理' },
    { id: 'database' as const, icon: Database, label: '数据库管理' },
    { id: 'table' as const, icon: Table, label: '表格配置' },
    { id: 'script' as const, icon: Terminal, label: '脚本执行' },
  ];

  return (
    <aside className="w-64 h-screen bg-dark-300 border-r border-surface-200">
      <div className="p-4">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-xl font-bold text-gray-100">管理系统</h1>
          <button
            onClick={toggleTheme}
            className="p-2 text-gray-400 hover:text-gray-100 transition-colors"
          >
            {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </button>
        </div>
        <nav className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => onSectionChange(item.id)}
                className={`w-full flex items-center px-4 py-3 text-sm rounded-lg transition-colors ${
                  activeSection === item.id
                    ? 'bg-surface-300 text-gray-100'
                    : 'text-gray-400 hover:text-gray-100 hover:bg-surface-200'
                }`}
              >
                <Icon className="w-5 h-5 mr-3" />
                {item.label}
              </button>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}