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
}

module.exports = User;
