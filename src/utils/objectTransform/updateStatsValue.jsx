const updateStatsValue = (stats, multiple) => {
  return Object.entries(stats).reduce((acc, [key, val]) => {
    return (acc = { ...acc, ...{ [key]: String(Math.floor(val * multiple)) } });
  }, []);
};

export default updateStatsValue;
