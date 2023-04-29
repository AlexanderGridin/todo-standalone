const { getAppDataFolder } = require("./getAppDataFolder");

const getProjectsDataFolder = () => {
  return `${getAppDataFolder()}/projects`;
};

module.exports = {
  getProjectsDataFolder,
};
