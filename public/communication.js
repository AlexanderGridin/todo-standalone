const { ipcMain } = require("electron");
const { handleInit } = require("./handlers/handleInit");

const initCrossProcessCommunication = () => {
	ipcMain.handle("init", handleInit);

	ipcMain.handle("toWayTest", (_event, payload) => {
		console.log(payload);
		return payload + "/returned from main";
	});
};

module.exports = {
	initCrossProcessCommunication,
};
