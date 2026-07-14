import { useState, useEffect } from 'react';

/**
 * Custom hook to stream real-time mobile payment transactions.
 * 
 * Stub implementation for Stage 1. Will be connected to WebSocket/SSE stream
 * once the backend endpoints are prepared.
 * 
 * @returns {object} Object containing { transactions, isConnected }
 */
export default function useTransactionStream() {
  // Stub state
  const [transactions] = useState([]);
  const [isConnected] = useState(false);

  useEffect(() => {
    // Stage 2 implementation will connect to stream here
    console.log('useTransactionStream: Mounted stub stream listener');
    return () => {
      console.log('useTransactionStream: Cleaned up stub stream listener');
    };
  }, []);

  return {
    transactions,
    isConnected,
  };
}
