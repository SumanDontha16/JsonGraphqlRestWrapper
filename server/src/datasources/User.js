const Axios = require("axios");

class User {
  constructor() {
    this.api = Axios.create({
      baseURL: "http://localhost:3333",
    });
  }

  async getAllUsers() {
    const response = await this.api.get("/users");
    return response.data || [];
  }

  async getUser(id) {
    const response = await this.api.get(`/users/${id}`);
    return response.data || [];
  }

  async createUser(input) {
    const response = await this.api.post("/users", input);
    console.log(response.data);
    return response.data || [];
  }

  async updateUser(id, input) {
    const response = await this.api.put(`/users/${id}`, input);
    return response.data || [];
  }

  async deleteUser(id) {
    const response = await this.api.delete(`/users/${id}`);
    return response.data || [];
  }
}

module.exports = User;
