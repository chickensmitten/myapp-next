import axios from 'axios';

class BaseApi {

  constructor(subPath) {
    this.config = {}
    this.apiUrl = "http://localhost:8080/api/v1" + subPath;
  }

  getAll() {
    return axios.get(this.apiUrl)
  }

  update(id, data) {
    return axios.patch(`${this.apiUrl}/${id}`, data, this.config);
  }

  getById(id) {
    return axios.get(`${this.apiUrl}/${id}`);
  }

  create(data) {
    return axios.post(this.apiUrl, data, this.config);
  }
}

export default BaseApi;