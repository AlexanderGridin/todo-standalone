const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("eAPI", {
	init: () => ipcRenderer.invoke("init"),
	toWayTest: (payload) => ipcRenderer.invoke("toWayTest", payload),
});
