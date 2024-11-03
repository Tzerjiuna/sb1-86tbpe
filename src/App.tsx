import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './components/Dashboard';
import { ServerManagement } from './components/ServerManagement';
import { DatabaseManagement } from './components/DatabaseManagement';
import { TableViewConfig } from './components/TableViewConfig';
import { ScriptExecution } from './components/ScriptExecution';
import { JsonManagement } from './components/JsonManagement';
import { Login } from './components/Login';
import { useAuth } from './utils/auth';
import { ThemeProvider } from './context/ThemeContext';

export type ActiveSection = 'dashboard' | 'server' | 'database' | 'table' | 'script' | 'json';

export function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeSection, setActiveSection] = useState<ActiveSection>('json');
  const authConfig = useAuth();

  const handleLogin = (username: string, password: string) => {
    if (authConfig && username === authConfig.username && password === authConfig.password) {
      setIsAuthenticated(true);
    }
  };

  return (
    <ThemeProvider>
      {!isAuthenticated ? (
        <Login onLogin={handleLogin} />
      ) : (
        <Layout>
          <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />
          <main className="flex-1 overflow-auto">
            {renderContent()}
          </main>
        </Layout>
      )}
    </ThemeProvider>
  );

  function renderContent() {
    switch (activeSection) {
      case 'server':
        return <ServerManagement />;
      case 'database':
        return <DatabaseManagement />;
      case 'table':
        return <TableViewConfig />;
      case 'script':
        return <ScriptExecution />;
      case 'json':
        return <JsonManagement />;
      default:
        return <Dashboard />;
    }
  }
}