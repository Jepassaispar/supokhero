import axios from "axios";

class APICharacter {
  constructor(name) {
    this.BASE_URL = `${
      process.env.REACT_APP_BACKEND_URL
    }/${name.toLowerCase()}`;
    this.handler = axios.create({
      baseURL: this.BASE_URL
    });
  }

  getAllCharacters() {
    return this.handler.get();
  }

  getOneCharacter(name) {
    return this.handler.get("/" + name);
  }
}

export default APICharacter;
