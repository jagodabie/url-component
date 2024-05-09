import { useEffect, useState } from 'react';

const useFetch = (url: string, method: string) => {
  const [result, setResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setResult('');
  }, [url, method]);

  return {
    result,
    isLoading,
    fetchData: async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url, { method });
        if (!response.ok) {
          setResult(`Fetch successful. Status: ${response.status}`);
        }
      } catch (error: unknown) {
        if (error instanceof Error) {
          setResult(`Fetch failed. Error: ${error.message}`);
        }
      } finally {
        setIsLoading(false);
      }
    },
  };
};

export default useFetch;
