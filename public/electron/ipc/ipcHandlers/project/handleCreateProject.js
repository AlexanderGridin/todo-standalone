const { writeFileSync, readFileSync } = require("fs");
const { getProjectsDataFolder } = require("../../../utils/getProjectsDataFolder");

const handleCreateProject = (_e, project) => {
  const fileName = project.fileName;

  const dataFolderPath = getProjectsDataFolder();
  const filePath = `${dataFolderPath}/${fileName}`;

  writeFileSync(filePath, JSON.stringify(project));

  const content = readFileSync(filePath, { encoding: "utf8" });
  return JSON.parse(content);
};

module.exports = {
  handleCreateProject,
};
