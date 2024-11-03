import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, AlertCircle, XCircle } from 'lucide-react';

export type NotificationType = 'success' | 'error' | 'info';

interface NotificationProps {
  type: NotificationType;
  message: string;
  isVisible: boolean;
  onClose: () => void;
}

export function Notification({ type, message, isVisible, onClose }: NotificationProps) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(onClose, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  const icons = {
    success: CheckCircle,
    error: AlertCircle,
    info: AlertCircle
  };

  const Icon = icons[type];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          className="fixed top-4 right-4 z-50"
        >
          <div className="glass-panel px-4 py-3 rounded-lg shadow-lg flex items-center space-x-3 border border-surface-200 backdrop-blur-md">
            <Icon className={`w-5 h-5 ${
              type === 'success' ? 'text-green-400' :
              type === 'error' ? 'text-red-400' :
              'text-blue-400'
            }`} />
            <span className="text-sm text-gray-200">{message}</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}