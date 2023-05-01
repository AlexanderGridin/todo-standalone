const { ipcMain } = require("electron");

const { handleInit } = require("./ipcHandlers/handleInit");

const { handleLoadProjects } = require("./ipcHandlers/projects/handleLoadProjects");

const { handleCreateProject } = require("./ipcHandlers/project/handleCreateProject");
const { handleUpdateProject } = require("./ipcHandlers/project/handleUpdateProject");
const { handleRemoveProject } = require("./ipcHandlers/project/handleRemoveProject");
const { handleLoadProject } = require("./ipcHandlers/project/handleLoadProject");

const initIpc = () => {
  // Init
  ipcMain.handle("init", handleInit);
  // Projects
  ipcMain.handle("loadProjects", handleLoadProjects);

  // Project
  ipcMain.handle("createProject", handleCreateProject);
  ipcMain.handle("removeProject", handleRemoveProject);
  ipcMain.handle("updateProject", handleUpdateProject);
  ipcMain.handle("loadProject", handleLoadProject);
};

module.exports = {
  initIpc,
};
