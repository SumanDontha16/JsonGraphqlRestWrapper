const { RESTDataSource } = require("apollo-datasource-rest");

class JsonPlaceHolderAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://jsonplaceholder.typicode.com/";
  }

  async getAllAlbums() {
    const response = await this.get("albums");
    return response || [];
  }

  async getAlbum(id) {
    const response = await this.get(`albums/${id}`);
    return response || [];
  }
}

module.exports = JsonPlaceHolderAPI;
