const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("eAPI", {
	init: () => ipcRenderer.invoke("init"),
	loadProjects: () => ipcRenderer.invoke("loadProjects"),
	toWayTest: (payload) => ipcRenderer.invoke("toWayTest", payload),
});
