import { useState } from 'react';
import useFetch from '../hooks/useFetchData';
import './index.css';

export const URLQueryComponent = () => {
  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('GET');

  const { result, isLoading, fetchData } = useFetch(url, method);

  const methods = ['GET', 'POST', 'PUT', 'DELETE'];

  return (
    <div>
      <h2>Enter your query</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type='text'
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder='Enter URL'
        />
        <select value={method} onChange={(e) => setMethod(e.target.value)}>
          {methods.map((method) => (
            <option key={method} value={method}>
              {method}
            </option>
          ))}
        </select>
        <button type='button' onClick={() => fetchData()} disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Fetch'}
        </button>
      </form>
      <p>{result}</p>
    </div>
  );
};
