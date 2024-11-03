import React, { useState, useEffect } from 'react';
import { Save, FileJson, Plus, Trash2, Edit2, Copy } from 'lucide-react';
import JsonEditor from './JsonEditor';
import { Notification } from './Notification';

interface ConfigTemplate {
  database: {
    host: string;
    user: string;
    password: string;
    database: string;
    port: number;
  };
  tron: {
    api_key: string;
    usdt_contract: string;
    private_key: string;
    tron_from_address: string;
  };
  ethereum: {
    provider_url: string;
    usdt_contract: string;
    private_key: string;
  };
  telegram: {
    bot_token: string;
    chat_id: string;
  };
}

const defaultConfig: ConfigTemplate = {
  database: {
    host: "127.0.0.1",
    user: "",
    password: "",
    database: "",
    port: 3306
  },
  tron: {
    api_key: "",
    usdt_contract: "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t",
    private_key: "",
    tron_from_address: ""
  },
  ethereum: {
    provider_url: "https://mainnet.infura.io/v3/",
    usdt_contract: "0xdac17f958d2ee523a2206206994597c13d831ec7",
    private_key: ""
  },
  telegram: {
    bot_token: "",
    chat_id: ""
  }
};

export function JsonManagement() {
  const [configs, setConfigs] = useState<Record<string, ConfigTemplate>>({});
  const [selectedConfig, setSelectedConfig] = useState<string | null>(null);
  const [jsonContent, setJsonContent] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [newConfigName, setNewConfigName] = useState('');
  const [notification, setNotification] = useState<{
    type: 'success' | 'error' | 'info';
    message: string;
    isVisible: boolean;
  }>({ type: 'info', message: '', isVisible: false });

  useEffect(() => {
    // 在实际应用中，这里应该从后端API加载配置
    const savedConfigs = {
      'config1': {
        ...defaultConfig,
        database: { ...defaultConfig.database, user: 'ttpp33k34443' }
      }
    };
    setConfigs(savedConfigs);
  }, []);

  useEffect(() => {
    if (selectedConfig && configs[selectedConfig]) {
      setJsonContent(JSON.stringify(configs[selectedConfig], null, 2));
    }
  }, [selectedConfig, configs]);

  const showNotification = (type: 'success' | 'error' | 'info', message: string) => {
    setNotification({ type, message, isVisible: true });
  };

  const handleSave = () => {
    try {
      const parsedContent = JSON.parse(jsonContent);
      if (selectedConfig) {
        setConfigs(prev => ({
          ...prev,
          [selectedConfig]: parsedContent
        }));
        showNotification('success', '配置保存成功');
      }
    } catch (err) {
      showNotification('error', 'JSON格式无效');
    }
  };

  const handleCreateConfig = () => {
    if (!newConfigName.trim()) {
      showNotification('error', '请输入配置名称');
      return;
    }
    if (configs[newConfigName]) {
      showNotification('error', '配置名称已存在');
      return;
    }
    setConfigs(prev => ({
      ...prev,
      [newConfigName]: { ...defaultConfig }
    }));
    setSelectedConfig(newConfigName);
    setNewConfigName('');
    setIsEditing(false);
    showNotification('success', '配置创建成功');
  };

  const handleDeleteConfig = (configName: string) => {
    setConfigs(prev => {
      const newConfigs = { ...prev };
      delete newConfigs[configName];
      return newConfigs;
    });
    if (selectedConfig === configName) {
      setSelectedConfig(null);
      setJsonContent('');
    }
    showNotification('success', '配置删除成功');
  };

  const handleDuplicateConfig = (configName: string) => {
    const newName = `${configName}_复制`;
    setConfigs(prev => ({
      ...prev,
      [newName]: JSON.parse(JSON.stringify(prev[configName]))
    }));
    showNotification('success', '配置复制成功');
  };

  return (
    <div className="flex-1 p-8 bg-dark-400">
      <Notification
        type={notification.type}
        message={notification.message}
        isVisible={notification.isVisible}
        onClose={() => setNotification(prev => ({ ...prev, isVisible: false }))}
      />

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-100">配置管理</h2>
        <div className="flex items-center space-x-4">
          {!isEditing ? (
            <button
              onClick={() => setIsEditing(true)}
              className="flex items-center px-4 py-2 bg-surface-200 hover:bg-surface-300 text-gray-100 rounded-lg transition-all duration-200"
            >
              <Plus className="w-4 h-4 mr-2" />
              新建配置
            </button>
          ) : (
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={newConfigName}
                onChange={(e) => setNewConfigName(e.target.value)}
                placeholder="输入配置名称"
                className="px-3 py-2 bg-dark-300 border border-surface-200 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-surface-300"
              />
              <button
                onClick={handleCreateConfig}
                className="flex items-center px-4 py-2 bg-surface-200 hover:bg-surface-300 text-gray-100 rounded-lg transition-all duration-200"
              >
                确认
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="flex items-center px-4 py-2 bg-red-900/30 hover:bg-red-900/50 text-gray-100 rounded-lg transition-all duration-200"
              >
                取消
              </button>
            </div>
          )}
          {selectedConfig && (
            <button
              onClick={handleSave}
              className="flex items-center px-4 py-2 bg-surface-200 hover:bg-surface-300 text-gray-100 rounded-lg transition-all duration-200"
            >
              <Save className="w-4 h-4 mr-2" />
              保存更改
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6">
        <div className="col-span-1">
          <div className="glass-panel rounded-lg p-4">
            <h3 className="text-lg font-semibold text-gray-100 mb-4">配置列表</h3>
            <div className="space-y-2">
              {Object.keys(configs).map((configName) => (
                <div
                  key={configName}
                  className={`flex items-center justify-between p-3 rounded-lg transition-colors ${
                    selectedConfig === configName
                      ? 'bg-surface-300'
                      : 'hover:bg-surface-200'
                  }`}
                >
                  <button
                    onClick={() => setSelectedConfig(configName)}
                    className="flex items-center flex-1 text-left"
                  >
                    <FileJson className="w-4 h-4 mr-2 text-gray-400" />
                    <span className="text-gray-100">{configName}</span>
                  </button>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleDuplicateConfig(configName)}
                      className="text-gray-400 hover:text-gray-100 transition-colors"
                    >
                      <Copy className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDeleteConfig(configName)}
                      className="text-gray-400 hover:text-red-400 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="col-span-3">
          <div className="glass-panel rounded-lg p-6">
            {selectedConfig ? (
              <JsonEditor
                value={jsonContent}
                onChange={setJsonContent}
              />
            ) : (
              <div className="text-center text-gray-400 py-20">
                请选择或创建一个配置文件
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}