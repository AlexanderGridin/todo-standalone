import { Project } from "models";

export const getProjectCreatedDateTime = (project: Project) => {
  const date = new Date(project.createdTime);
  const [m, d, y] = date.toLocaleDateString().split("/");
  const time = `${date.getHours()}:${date.getMinutes()}`;

  return `${d}.${Number(m) < 10 ? "0" + m : m}.${y} ${time}`;
};
