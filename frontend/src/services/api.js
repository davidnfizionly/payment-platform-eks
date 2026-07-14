const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';

/**
 * Generic API fetch client helper.
 * 
 * @param {string} endpoint - The relative endpoint to fetch (e.g. '/transactions')
 * @param {object} options - Fetch configuration options (headers, method, body, etc.)
 * @returns {Promise<any>} Response JSON data
 */
export async function fetchFromAPI(endpoint, options = {}) {
  const url = `${API_BASE_URL}${endpoint.startsWith('/') ? endpoint : `/${endpoint}`}`;
  
  const defaultHeaders = {
    'Content-Type': 'application/json',
  };

  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        ...defaultHeaders,
        ...options.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`API error [${response.status}]: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`Failed to fetch from API at ${url}:`, error);
    throw error;
  }
}
