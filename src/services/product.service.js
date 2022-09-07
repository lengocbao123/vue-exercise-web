import http from "../api";
class DataService {
  getAll() {
    return http.get("/products");
  }
}

export default new DataService();
