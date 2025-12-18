/**
 * Centralized API client for type-safe, consistent fetch operations
 * Handles error handling, authentication, and response validation
 */

interface FetchOptions extends RequestInit {
  timeout?: number;
}

interface ApiError extends Error {
  status?: number;
  data?: unknown;
}

class ApiClient {
  private baseUrl = process.env.NEXT_PUBLIC_API_URL || "";
  private defaultTimeout = 30000; // 30 seconds

  /**
   * Make a fetch request with centralized error handling
   */
  async fetch<T>(endpoint: string, options: FetchOptions = {}): Promise<T> {
    const { timeout = this.defaultTimeout, ...fetchOptions } = options;

    const url = `${this.baseUrl}${endpoint}`;

    // Set default headers
    const headers = new Headers(fetchOptions.headers || {});
    if (
      !headers.has("Content-Type") &&
      !(fetchOptions.body instanceof FormData)
    ) {
      headers.set("Content-Type", "application/json");
    }

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), timeout);

      const response = await fetch(url, {
        ...fetchOptions,
        headers,
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        const error: ApiError = new Error(
          `API error: ${response.status} ${response.statusText}`
        );
        error.status = response.status;

        try {
          error.data = await response.json();
        } catch {
          // Response wasn't JSON, that's okay
        }

        throw error;
      }

      // Handle empty responses (204 No Content)
      if (response.status === 204) {
        return undefined as T;
      }

      return response.json() as Promise<T>;
    } catch (error) {
      if (error instanceof TypeError) {
        // Network error or request was aborted
        throw new Error(
          `Network error: ${error.message}. Are you offline?`
        ) as ApiError;
      }

      throw error;
    }
  }

  /**
   * GET request
   */
  get<T>(endpoint: string, options?: FetchOptions): Promise<T> {
    return this.fetch<T>(endpoint, { ...options, method: "GET" });
  }

  /**
   * POST request
   */
  post<T>(
    endpoint: string,
    body?: unknown,
    options?: FetchOptions
  ): Promise<T> {
    return this.fetch<T>(endpoint, {
      ...options,
      method: "POST",
      body: body ? JSON.stringify(body) : undefined,
    });
  }

  /**
   * PATCH request
   */
  patch<T>(
    endpoint: string,
    body?: unknown,
    options?: FetchOptions
  ): Promise<T> {
    return this.fetch<T>(endpoint, {
      ...options,
      method: "PATCH",
      body: body ? JSON.stringify(body) : undefined,
    });
  }

  /**
   * PUT request
   */
  put<T>(endpoint: string, body?: unknown, options?: FetchOptions): Promise<T> {
    return this.fetch<T>(endpoint, {
      ...options,
      method: "PUT",
      body: body ? JSON.stringify(body) : undefined,
    });
  }

  /**
   * DELETE request
   */
  delete<T>(endpoint: string, options?: FetchOptions): Promise<T> {
    return this.fetch<T>(endpoint, { ...options, method: "DELETE" });
  }
}

export const apiClient = new ApiClient();
