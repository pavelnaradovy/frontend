import axios, { AxiosInstance } from "axios";

export default class Api {
  instance = axios.create({ baseURL: process.env.NEXT_PUBLIC_BASE_URL });

  request = async (url, method, data, options)=> {
    const token = localStorage.getItem("token") ?? "";
    setAutorizationToken(this.instance, token);
    try {
      const response = await this.instance[method](url, data, options);
    } catch (err) {
      throw err;
    }
  };

  get = async (url, data = null, options = null) =>
    await this.request(url, "get", data, options);
  post = async (url, data = null, options = null) =>
    await this.request(url, "post", data, options);

  put = async (url, data = null, options = null) =>
    await this.request(url, "put", data, options);

  patch = async (url, data = null, options = null) =>
    await this.request(url, "patch", data, options);

  delete = async (url, data = null, options = null) =>
    await this.request(url, "delete", data, options);
  options = async (url, data = null, options = null) =>
    await this.request(url, "options", data, options);
}

export function setAutorizationToken(instance, token) {
  if (token) {
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    delete instance.defaults.headers.common.Autorization;
  }
}
