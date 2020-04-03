import Vue from 'vue';
import axios, { AxiosInstance } from 'axios';

export function AxiosInstaller(
  baseURL: string,
  token: string,
  redirectUrl: string,
): void {
  const axiosInstance = axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  // Redirect to login when 401 occurs
  axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response.status === 401) {
        localStorage.removeItem('AUTH_TOKEN');
        window.location.href = redirectUrl;

        return Promise.reject(error);
      }

      return Promise.reject(error);
    },
  );

  Object.defineProperty(Vue.prototype, '$http', {
    get(): AxiosInstance {
      return axiosInstance;
    },
  });
}
