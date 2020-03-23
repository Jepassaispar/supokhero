import axios from "axios";

class APIPoke {
  constructor(baseURL) {
    this.handler = axios.create({
      baseURL
    });
  }

  getAllPoke() {
    return this.handler.get(`/`);
  }

  getPokemon(name) {
    return this.handler.get(`/${name}`);
  }
}

export default APIPoke;
