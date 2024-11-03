import React, { useState } from 'react';
import { User, Lock, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

interface LoginProps {
  onLogin: (username: string, password: string) => void;
}

export function Login({ onLogin }: LoginProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 800));
      onLogin(username, password);
    } catch (err) {
      setError('登录失败，请重试');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-dark-400 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-md"
      >
        <div className="glass-panel rounded-2xl p-8 shadow-xl border border-surface-200">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-8"
          >
            <div className="mx-auto h-16 w-16 bg-surface-200 rounded-2xl flex items-center justify-center mb-4 backdrop-blur-lg">
              <Lock className="h-8 w-8 text-gray-100" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">
              同舟没品
            </h2>
            <p className="text-sm text-gray-400">
              请输入您的账号密码
            </p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="space-y-4"
            >
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-300 mb-2">
                  用户名
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="username"
                    name="username"
                    type="text"
                    required
                    className="appearance-none block w-full pl-10 px-3 py-2 bg-dark-300 border border-surface-200 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-surface-300 focus:border-transparent transition-all duration-200"
                    placeholder="同舟没品"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                  密码
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    className="appearance-none block w-full pl-10 px-3 py-2 bg-dark-300 border border-surface-200 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-surface-300 focus:border-transparent transition-all duration-200"
                    placeholder="残次出品"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
            </motion.div>

            {error && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="rounded-lg bg-red-900/20 p-4 text-sm text-red-400 border border-red-900/50"
              >
                {error}
              </motion.div>
            )}

            <motion.button
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              type="submit"
              disabled={isLoading}
              className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg text-white bg-surface-300 hover:bg-surface-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-surface-300 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                '登 录'
              )}
            </motion.button>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-center text-xs text-gray-500"
            >
<p>
随缘维护: <a href="https://t.me/+cZmw7cWQJUw3OTdl">TG：@oneboat</a></p>
            </motion.div>
          </form>
        </div>
      </motion.div>
    </div>
  );
}