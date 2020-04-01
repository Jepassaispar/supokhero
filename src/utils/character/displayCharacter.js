import APICharacter from "../../api/APICharacter";

const displayCharacter = (
  name,
  category,
  transformCharacter,
  setCharacter,
  addFighter
) => {
  const characterAPI = new APICharacter(category);
  characterAPI
    .getOneCharacter(name)
    .then(apiRes => {
      const newCharacter = transformCharacter(apiRes.data);
      setCharacter(newCharacter);
      if (addFighter) addFighter(newCharacter);
    })
    .catch(apiErr => console.error(apiErr));
};

export default displayCharacter;
