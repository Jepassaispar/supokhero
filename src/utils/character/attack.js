import changeFighter from "../team/changeFighter";

const attack = (fighters, category, setFighters) => {
  let attacker;
  let victim;
  let victimCategory;
  let categories = Object.keys(fighters);
  categories.map(cat => {
    if (cat === category) {
      attacker = fighters[cat][0];
    } else {
      victimCategory = cat;
      victim = fighters[cat][0];
    }
  });
  const hpLoss = () => {
    return Math.floor(
      (Number(attacker.stats.attack) / Number(victim.stats.defense)) * 10
    );
  };
  let newVictim = {
    ...victim,
    ...{ hp: String(victim.hp - hpLoss() <= 0 ? 0 : victim.hp - hpLoss()) }
  };
  const newFighters = { ...fighters };
  newVictim.hp <= 0
    ? changeFighter(fighters, newVictim, victimCategory)
    : // console.log(!Number(newFighters[victimCategory][0].hp));
      newFighters[victimCategory].splice(0, 1, newVictim);

  return setFighters(newFighters);
};

export default attack;
