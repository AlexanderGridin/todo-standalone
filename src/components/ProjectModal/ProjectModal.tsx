import { Modal } from "@alexandergridin/rtc-components-lib";
import { ProjectForm } from "components/ProjectForm";
import { ModalName, Project } from "models";
import { createProjectAsync, updateProjectAsync } from "services";
import { pushProjectAction, updateProjectAction } from "store/actions/project";
import { closeModalAction } from "store/actions/modal";
import { useAppState } from "store/hooks";

export const ProjectModal = () => {
  const state = useAppState();

  const isOpen = state.modalMap[ModalName.ProjectModal]?.isOpen;
  const projectInEditState = state.projects.find((project) => project.isEditing) ?? null;

  const closeModal = () => {
    state.dispatch(closeModalAction(ModalName.ProjectModal));
  };

  const handleSubmit = async (project: Project) => {
    if (projectInEditState) {
      const updatedProject = await updateProjectAsync({
        ...project,
        isEditing: false,
      });

      state.dispatch(updateProjectAction(updatedProject));

      closeModal();
      return;
    }

    const createdProject = await createProjectAsync(project);
    state.dispatch(pushProjectAction(createdProject));

    closeModal();
  };

  const handleCancel = () => {
    if (projectInEditState) {
      state.dispatch(
        updateProjectAction({
          ...projectInEditState,
          isEditing: false,
        })
      );
    }

    closeModal();
  };

  return isOpen ? (
    <Modal title={`${projectInEditState ? "Edit" : "Add"} project`} open={isOpen}>
      <ProjectForm project={projectInEditState} onSubmit={handleSubmit} onCancel={handleCancel} />
    </Modal>
  ) : null;
};
