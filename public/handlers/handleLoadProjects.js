const { readdirSync, readFileSync } = require("fs");
const { getAppDataFolder } = require("../utils/getAppDataFolder");

const handleLoadProjects = () => {
	const dataFolderPath = getAppDataFolder();
	const projectsFileNames = readdirSync(dataFolderPath);

	return projectsFileNames.map((fileName) => {
		const filePath = `${dataFolderPath}/${fileName}`;
		const content = readFileSync(filePath, { encoding: "utf8" });

		return JSON.parse(content);
	});
};

module.exports = {
	handleLoadProjects,
};
