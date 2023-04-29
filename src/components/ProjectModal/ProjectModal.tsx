import { Modal } from "@alexandergridin/rtc-components-lib";
import { ProjectForm } from "components/ProjectForm";
import { Project } from "models";
import { createProjectAsync, updateProjectAsync } from "services";
import { pushProjectAction, updateProjectAction } from "store/actions";
import { closeModalAction } from "store/actions/modal";
import { useAppState } from "store/hooks";

export const ProjectModal = () => {
  const state = useAppState();

  const isOpen = state.modalMap["ProjectModal"]?.isOpen;
  const projectInEditState = state.projects.find((project) => project.isEditing) ?? null;

  const handleSubmit = async (project: Project) => {
    if (projectInEditState) {
      const updatedProject = await updateProjectAsync({
        ...project,
        isEditing: false,
      });

      state.dispatch(updateProjectAction(updatedProject));
      state.dispatch(closeModalAction("ProjectModal"));

      return;
    }

    const createdProject = await createProjectAsync(project);
    state.dispatch(pushProjectAction(createdProject));
    state.dispatch(closeModalAction("ProjectModal"));
  };

  const handleCancel = () => {
    state.dispatch(closeModalAction("ProjectModal"));

    if (projectInEditState) {
      state.dispatch(
        updateProjectAction({
          ...projectInEditState,
          isEditing: false,
        })
      );
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <Modal title={`${projectInEditState ? "Edit" : "Add"} project`} open={isOpen}>
      <ProjectForm project={projectInEditState} onSubmit={handleSubmit} onCancel={handleCancel} />
    </Modal>
  );
};
