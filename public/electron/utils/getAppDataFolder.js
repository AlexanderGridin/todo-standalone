const { homedir } = require("os");

const getAppDataFolder = () => {
  return `${homedir()}/Documents/TodoAppData`;
};

module.exports = {
  getAppDataFolder,
};
