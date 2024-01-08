import axios, { AxiosInstance, AxiosResponse } from "axios";
import Interceptor from "../interceptor";

class HttpRequest {

  private axiosInstance: AxiosInstance;
  private interceptor: Interceptor;

  constructor(interceptor: Interceptor) {
    this.interceptor = interceptor;
    this.axiosInstance = axios.create()

    this.axiosInstance.interceptors.request.use(
      (config) => this.interceptor.intercept(config),
      (error) => Promise.reject(error)
    )
  }

  sendRequest<T = any>(url: string, method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET', data?: any): Promise<T> {
    return this.axiosInstance.request<T>({
      method,
      url,
      data,
    })
    .then((response: AxiosResponse<T>) => response.data)
    .catch((error) => {
      throw new Error(error);
    });
  }
}

export default HttpRequest