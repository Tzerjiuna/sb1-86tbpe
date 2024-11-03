import { useState, useEffect } from 'react';

interface AuthConfig {
  username: string;
  password: string;
}

export function useAuth() {
  const [authConfig, setAuthConfig] = useState<AuthConfig | null>(null);

  useEffect(() => {
    // In a real application, this would be fetched from an API
    // For demo purposes, we're using hardcoded values
    setAuthConfig({
      username: 'admin777',
      password: 'admin777'
    });
  }, []);

  return authConfig;
}