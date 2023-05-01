const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("eAPI", {
  // Init
  init: () => ipcRenderer.invoke("init"),

  // Projects
  loadProjects: () => ipcRenderer.invoke("loadProjects"),

  // Project
  loadProject: (id) => ipcRenderer.invoke("loadProject", id),
  createProject: (project) => ipcRenderer.invoke("createProject", project),
  removeProject: (project) => ipcRenderer.invoke("removeProject", project),
  updateProject: (project) => ipcRenderer.invoke("updateProject", project),
});
