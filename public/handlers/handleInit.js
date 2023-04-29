const { existsSync, mkdirSync } = require("fs");
const { getAppDataFolder } = require("../utils/getAppDataFolder");
const { getProjectsDataFolder } = require("../utils/getProjectsDataFolder");

const handleInit = () => {
	const path = getAppDataFolder();
	const projectsPath = getProjectsDataFolder();

	const messages = [];

	if (existsSync(path)) {
		messages.push("App data folder exist");
	} else {
		mkdirSync(path);
		messages.push("App data folder created");
	}

	if (existsSync(projectsPath)) {
		messages.push("Projects folder exist");
	} else {
		mkdirSync(projectsPath);
		messages.push("Projects folder created");
	}

	messages.push("App initialized");
	return messages.join("\n");
};

module.exports = {
	handleInit,
};
