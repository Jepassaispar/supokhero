const updateStatsValue = (stats, multiple) => {
  console.log(
    Object.entries(stats).reduce((acc, [key, val]) => {
      return (acc = { ...acc, ...{ [key]: val * multiple } });
    }, [])
  );
  return Object.entries(stats).reduce((acc, [key, val]) => {
    return (acc = { ...acc, ...{ [key]: Math.floor(val * multiple) } });
  }, []);
};

export default updateStatsValue;
