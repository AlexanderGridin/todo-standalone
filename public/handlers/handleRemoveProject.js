const { existsSync, rmSync } = require("fs");
const { getProjectsDataFolder } = require("../utils/getProjectsDataFolder");

const handleRemoveProject = (_e, project) => {
  const dataFolderPath = getProjectsDataFolder();
  const filePath = `${dataFolderPath}/${project.fileName}`;

  if (!existsSync(filePath)) {
    return;
  }

  rmSync(filePath);
  return project;
};

module.exports = {
  handleRemoveProject,
};
