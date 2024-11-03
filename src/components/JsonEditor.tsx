import React from 'react';
import { motion } from 'framer-motion';

interface JsonEditorProps {
  value: string;
  onChange: (value: string) => void;
}

export default function JsonEditor({ value, onChange }: JsonEditorProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <textarea
        className="w-full h-[600px] font-mono text-sm p-4 rounded-lg border border-surface-200 bg-dark-300 text-gray-100 focus:ring-2 focus:ring-surface-300 focus:border-transparent transition-colors duration-200"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        spellCheck={false}
      />
    </motion.div>
  );
}