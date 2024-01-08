import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

interface InternalAxiosRequestConfig<T = any> extends AxiosRequestConfig {
}

class Interceptor {

  private accessToken: string | null = null;

  setAccessToken(token: string) {
    this.accessToken = token
  }

  intercept(config: InternalAxiosRequestConfig): InternalAxiosRequestConfig {

    config.headers = config.headers || {};
    if (this.accessToken) {
      config.headers['Authorization'] = `Bearer ${this.accessToken}`;
    }
    return config;
  }


}

export default Interceptor
