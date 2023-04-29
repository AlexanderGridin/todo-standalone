const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("eAPI", {
	init: () => ipcRenderer.invoke("init"),
	loadProjects: () => ipcRenderer.invoke("loadProjects"),
	createProject: (project) => ipcRenderer.invoke("createProject", project),
	removeProject: (project) => ipcRenderer.invoke("removeProject", project),
	updateProject: (project) => ipcRenderer.invoke("updateProject", project),
});
