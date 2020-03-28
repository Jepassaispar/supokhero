const isFighterSelected = (character, fighters) => {
  return !fighters[character.category].find(f => f.name === character.name);
};

export default isFighterSelected;
