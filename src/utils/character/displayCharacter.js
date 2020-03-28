import APICharacter from "../../api/APICharacter";

const displayCharacter = (name, category, setCharacter, transformCharacter) => {
  const characterAPI = new APICharacter(category);
  characterAPI
    .getOneCharacter(name)
    .then(apiRes => {
      const newCharacter = apiRes.data;
      setCharacter(transformCharacter(newCharacter));
    })
    .catch(apiErr => console.error(apiErr));
};

export default displayCharacter;
