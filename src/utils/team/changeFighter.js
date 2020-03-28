const changeFighter = (fighters, victim, victimCategory) => {
  fighters[victimCategory].splice(0, 1);
  fighters[victimCategory].splice(3, 1, victim);
};

export default changeFighter;
