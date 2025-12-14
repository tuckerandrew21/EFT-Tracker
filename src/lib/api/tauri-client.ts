/**
 * API Client for Tauri Companion App
 *
 * This client detects if the app is running in Tauri and routes all API calls
 * to the production server at https://learntotarkov.com
 *
 * For the web version, it uses relative URLs to call the local API.
 *
 * IMPORTANT: Tauri uses Bearer token authentication, not session cookies.
 * The companion token must be stored and retrieved using getCompanionToken().
 */

// Detect if running in Tauri
const isTauri = typeof window !== "undefined" && "__TAURI__" in window;

// API base URL
const API_BASE_URL = isTauri
  ? process.env.NEXT_PUBLIC_API_URL || "https://learntotarkov.com"
  : ""; // Use relative URLs in web version

/**
 * Get stored companion token from localStorage (Tauri only)
 * Returns null if not set or if not in Tauri
 */
function getCompanionToken(): string | null {
  if (!isTauri || typeof window === "undefined") {
    return null;
  }
  return localStorage.getItem("companion_token");
}

/**
 * Set companion token in localStorage (Tauri only)
 */
export function setCompanionToken(token: string | null): void {
  if (!isTauri || typeof window === "undefined") {
    return;
  }
  if (token) {
    localStorage.setItem("companion_token", token);
  } else {
    localStorage.removeItem("companion_token");
  }
}

/**
 * Generic fetch wrapper with authentication
 * Uses Bearer token for Tauri, cookies for web
 */
async function fetchWithAuth(
  path: string,
  options: RequestInit = {}
): Promise<Response> {
  const url = `${API_BASE_URL}${path}`;

  const headers: HeadersInit = {
    "Content-Type": "application/json",
    ...options.headers,
  };

  // Add Bearer token for Tauri companion API endpoints
  if (isTauri) {
    const token = getCompanionToken();
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }
  }

  const response = await fetch(url, {
    ...options,
    credentials: isTauri ? "omit" : "include", // No cookies in Tauri
    headers,
  });

  return response;
}

/**
 * API Client
 */
export const tauriApiClient = {
  /**
   * GET request
   */
  get: async <T = unknown>(path: string): Promise<T> => {
    const response = await fetchWithAuth(path, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    return response.json();
  },

  /**
   * POST request
   */
  post: async <T = unknown>(path: string, data: unknown): Promise<T> => {
    const response = await fetchWithAuth(path, {
      method: "POST",
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    return response.json();
  },

  /**
   * PUT request
   */
  put: async <T = unknown>(path: string, data: unknown): Promise<T> => {
    const response = await fetchWithAuth(path, {
      method: "PUT",
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    return response.json();
  },

  /**
   * PATCH request
   */
  patch: async <T = unknown>(path: string, data: unknown): Promise<T> => {
    const response = await fetchWithAuth(path, {
      method: "PATCH",
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    return response.json();
  },

  /**
   * DELETE request
   */
  delete: async <T = unknown>(path: string): Promise<T> => {
    const response = await fetchWithAuth(path, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    return response.json();
  },
};

/**
 * Check if running in Tauri
 */
export function isTauriApp(): boolean {
  return isTauri;
}

/**
 * Get the API base URL
 */
export function getApiBaseUrl(): string {
  return API_BASE_URL;
}
