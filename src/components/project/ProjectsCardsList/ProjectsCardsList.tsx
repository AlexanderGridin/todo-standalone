import { ModalName, Project } from "models";
import { Fab } from "components/buttons";
import { useAppState } from "store/hooks";
import { openModalAction } from "store/actions/modal";

import { ProjectCard } from "../ProjectCard";
import { ProjectModal } from "../ProjectModal";

import style from "./ProjectsCardsList.module.css";

export const ProjectsCardsList = () => {
  const state = useAppState();

  const handleAddProjectButtonClick = () => {
    state.dispatch(openModalAction(ModalName.ProjectModal));
  };

  const footer = (
    <>
      <Fab tooltipText="Add project" onClick={handleAddProjectButtonClick} />
      <ProjectModal />
    </>
  );

  if (!state.projects.length) {
    return (
      <>
        <h2 style={{ color: "#FFF", textAlign: "center" }}>You don't have any projects...</h2>
        {footer}
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

      {footer}
    </>
  );
};
