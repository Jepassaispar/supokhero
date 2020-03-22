import axios from "axios";

class APIHero {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
    this.handler = axios.create({
      baseURL: this.BASE_URL
    });
  }

  getAllHeroes() {
    return this.handler.get(`/`);
  }

  queryHeroes(query) {
    return this.handler.get(`/search/${query}`);
  }
}

export default APIHero;
