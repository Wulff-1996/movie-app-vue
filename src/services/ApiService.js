import axios from "axios";

const API_KEY = "81a6f060b362e563f6557d4c74ab2e27";
const headers = {
  "Content-Type": "application/json"
};
const baseURL = "https://api.themoviedb.org/3/";

const instance = axios.create({
  headers,
  baseURL
});

export default {
  getPosterPath(id) {
    return `https://image.tmdb.org/t/p/w500/${id}`;
  },
  getProfilePicturePath(id) {
    return "https://image.tmdb.org/t/p/w500//" + id;
  },
  get(url, params = {}, headers = {}) {
    return instance.get(url, {
      params: { api_key: API_KEY, ...params },
      headers: { ...headers }
    });
  },

  /**
   * Sends a PATCH request
   * @param {string} url
   * @param {object} data
   * @param {object} params
   * @param headers
   * @returns {AxiosPromise | *}
   */
  patch(url, data, params = {}, headers = {}) {
    return instance.patch(url, data, {
      params: { api_key: API_KEY, ...params },
      headers: { ...headers }
    });
  },

  /**
   * Sens a PUT request
   *
   * @param {string} url
   * @param data
   * @param {object} params
   * @param headers
   * @returns {AxiosPromise<any>}
   */
  put(url, data, params = {}, headers = {}) {
    return instance.put(url, data, {
      params: { api_key: API_KEY, ...params },
      headers: { ...headers }
    });
  },

  /**
   * Sends a POST request
   * @param {string} url
   * @param {object} data
   * @param {object} params
   * @param headers
   * @returns {AxiosPromise | *}
   */
  post(url, data, params = {}, headers = {}) {
    return instance.post(url, data, {
      params: { api_key: API_KEY, ...params },
      headers: { ...headers }
    });
  },

  /**
   * Sends a DELETE request
   *
   * @param {string} url
   * @param {object} params
   * @param headers
   * @returns {AxiosPromise | *}
   */
  delete(url, params = {}, headers = {}) {
    return instance.delete(url, {
      params: { api_key: API_KEY, ...params },
      headers: { ...headers }
    });
  }
};
