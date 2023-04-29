const { existsSync, writeFileSync } = require("fs");
const { getProjectsDataFolder } = require("../utils/getProjectsDataFolder");

const handleUpdateProject = (_e, project) => {
  const dataFolderPath = getProjectsDataFolder();
  const filePath = `${dataFolderPath}/${project.fileName}`;

  if (!existsSync(filePath)) {
    return;
  }

  writeFileSync(filePath, JSON.stringify(project));
  return project;
};

module.exports = {
  handleUpdateProject,
};
