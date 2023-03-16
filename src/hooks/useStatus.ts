import { useState } from 'react';

export const useStatus = () => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  return {
    error,
    setError,
    loading,
    setLoading,
  };
};
