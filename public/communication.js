const { ipcMain } = require("electron");

const { handleInit } = require("./handlers/handleInit");
const { handleLoadProjects } = require("./handlers/handleLoadProjects");
const { handleCreateProject } = require("./handlers/handleCreateProject");
const { handleRemoveProject } = require("./handlers/handleRemoveProject");
const { handleUpdateProject } = require("./handlers/handleUpdateProject");

const initCrossProcessCommunication = () => {
  ipcMain.handle("init", handleInit);
  ipcMain.handle("loadProjects", handleLoadProjects);
  ipcMain.handle("createProject", handleCreateProject);
  ipcMain.handle("removeProject", handleRemoveProject);
  ipcMain.handle("updateProject", handleUpdateProject);
};

module.exports = {
  initCrossProcessCommunication,
};
