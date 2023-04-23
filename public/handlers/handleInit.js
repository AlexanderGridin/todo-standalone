const { existsSync, mkdirSync } = require("fs");
const { getAppDataFolder } = require("../utils/getAppDataFolder");

const handleInit = () => {
	const path = getAppDataFolder();

	if (existsSync(path)) {
		return "Data folder exist. App initialized!";
	}

	mkdirSync(path);
	return "Data folder created. App initialized!";
};

module.exports = {
	handleInit,
};
