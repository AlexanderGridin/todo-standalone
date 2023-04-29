import { ModalName, Project } from "models";
import { ProjectCard } from "components/ProjectCard";
import { Fab } from "components/Fab";
import { useAppState } from "store/hooks";
import { ProjectModal } from "components/ProjectModal";
import { openModalAction } from "store/actions/modal";

import style from "./ProjectsCardsList.module.css";

export const ProjectsCardsList = () => {
  const state = useAppState();

  const handleAddProjectButtonClick = () => {
    state.dispatch(openModalAction(ModalName.ProjectModal));
  };

  if (!state.projects.length) {
    return (
      <>
        <h2 style={{ color: "#FFF", textAlign: "center" }}>You don't have any projects...</h2>

        <Fab tooltipText="Add project" onClick={handleAddProjectButtonClick} />
        <ProjectModal />
      </>
    );
  }

  return (
    <>
      <ul className={`list-plain ${style.list}`}>
        {state.projects.map((project: Project) => {
          return (
            <li key={project.id} className={style.listItem}>
              <ProjectCard project={project} />
            </li>
          );
        })}
      </ul>

      <Fab tooltipText="Add project" onClick={handleAddProjectButtonClick} />
      <ProjectModal />
    </>
  );
};
