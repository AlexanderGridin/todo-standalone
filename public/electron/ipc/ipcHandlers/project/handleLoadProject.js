const { readFileSync, readdirSync } = require("fs");
const { getProjectsDataFolder } = require("../../../utils/getProjectsDataFolder");

const handleLoadProject = (_e, id) => {
  const dataFolderPath = getProjectsDataFolder();

  const projectsFileNames = readdirSync(dataFolderPath);
  const fileName = projectsFileNames.find((name) => name.includes(id));

  if (!fileName) {
    return;
  }

  const filePath = `${dataFolderPath}/${fileName}`;
  const content = readFileSync(filePath, { encoding: "utf8" });
  return JSON.parse(content);
};

module.exports = {
  handleLoadProject,
};
