const { readdirSync, readFileSync } = require("fs");
const { getProjectsDataFolder } = require("../utils/getProjectsDataFolder");

const handleLoadProjects = () => {
	const dataFolderPath = getProjectsDataFolder();
	const projectsFileNames = readdirSync(dataFolderPath);

	const projects = projectsFileNames.map((fileName) => {
		const filePath = `${dataFolderPath}/${fileName}`;
		const content = readFileSync(filePath, { encoding: "utf8" });

		return JSON.parse(content);
	});

	return projects.sort((a, b) => a.createdTime - b.createdTime);
};

module.exports = {
	handleLoadProjects,
};
