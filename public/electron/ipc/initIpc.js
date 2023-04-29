const { ipcMain } = require("electron");

const { handleInit } = require("./ipcHandlers/handleInit");

const { handleLoadProjects } = require("./ipcHandlers/projects/handleLoadProjects");

const { handleCreateProject } = require("./ipcHandlers/project/handleCreateProject");
const { handleUpdateProject } = require("./ipcHandlers/project/handleUpdateProject");
const { handleRemoveProject } = require("./ipcHandlers/project/handleRemoveProject");

const initIpc = () => {
  ipcMain.handle("init", handleInit);
  ipcMain.handle("loadProjects", handleLoadProjects);
  ipcMain.handle("createProject", handleCreateProject);
  ipcMain.handle("removeProject", handleRemoveProject);
  ipcMain.handle("updateProject", handleUpdateProject);
};

module.exports = {
  initIpc,
};
