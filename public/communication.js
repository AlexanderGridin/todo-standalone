const { ipcMain } = require("electron");

const { handleInit } = require("./handlers/handleInit");
const { handleLoadProjects } = require("./handlers/handleLoadProjects");

const initCrossProcessCommunication = () => {
	ipcMain.handle("init", handleInit);

	ipcMain.handle("toWayTest", (_event, payload) => {
		console.log(payload);
		return payload + "/returned from main";
	});

	ipcMain.handle("loadProjects", handleLoadProjects);
};

module.exports = {
	initCrossProcessCommunication,
};
