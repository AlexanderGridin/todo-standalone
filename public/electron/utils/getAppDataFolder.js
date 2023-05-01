const { homedir } = require("os");
const isDev = require("electron-is-dev");

const getAppDataFolder = () => {
  return isDev ? `${homedir()}/Documents/TodoAppData--DEV` : `${homedir()}/Documents/TodoAppData`;
};

module.exports = {
  getAppDataFolder,
};
