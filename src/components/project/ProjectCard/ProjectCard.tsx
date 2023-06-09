import { Card } from "@alexandergridin/rtc-components-lib";
import { ModalName, Project } from "models";
import InfoIcon from "@mui/icons-material/Info";
import ClickAwayListener from "@mui/material/ClickAwayListener";

import style from "./ProjectCard.module.css";
import { removeProjectAsync } from "services";
import { useAppState } from "store/hooks";
import { removeProjectAction, updateProjectAction } from "store/actions/project";
import { EditButton, DeleteButton } from "components/buttons";
import { openModalAction } from "store/actions/modal";
import { Tooltip } from "@mui/material";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";
import { getProjectCreatedDateTime } from "utils";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const state = useAppState();
  const navigate = useNavigate();
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);

  const handleEditClick = () => {
    state.dispatch(
      updateProjectAction({
        ...project,
        isEditing: true,
      })
    );

    state.dispatch(openModalAction(ModalName.ProjectModal));
  };

  const handleDeleteClick = async () => {
    const removedProject = await removeProjectAsync(project);
    state.dispatch(removeProjectAction(removedProject));
  };

  const handleDblClick = () => {
    navigate(`project/${project.id}`);
  };

  return (
    <Tooltip title={<span style={{ fontFamily: "Comfortaa" }}>Double click to open</span>} placement="bottom" arrow>
      <div>
        <Card minHeight={150} onDoubleClick={handleDblClick} className={style.card}>
          <div className={style.header}>
            <h2 style={{ color: "#000" }}>{project.name}</h2>

            <div>
              <EditButton tooltipText="Edit project" onClick={handleEditClick} />
              <DeleteButton tooltipText="Delete project" onClick={handleDeleteClick} />
            </div>
          </div>

          <div className={style.todosInfo}>
            <div className={style.todosInfoActive}>
              <b className={style.todosInfoLabel}>Active todos: </b>
              {project.inProgressTodo ? project.activeTodos.length + 1 : project.activeTodos.length}
            </div>

            <div className={style.todosInfoCompleted}>
              <b className={style.todosInfoLabel}>Completed todos: </b>
              {project.completedTodos.length}
            </div>
          </div>

          <div className={style.created}>
            <ClickAwayListener onClickAway={() => setIsTooltipOpen(false)}>
              <div>
                <Tooltip
                  placement="top"
                  arrow
                  title={
                    <div style={{ padding: "7px", fontFamily: "Comfortaa" }}>
                      <div style={{ marginBottom: "7px", display: "flex" }}>
                        <strong style={{ width: "70px", display: "inline-block" }}>
                          <u>Created: </u>
                        </strong>
                        <span>{getProjectCreatedDateTime(project)}</span>
                      </div>

                      <div style={{ display: "flex" }}>
                        <strong style={{ width: "70px", display: "inline-block" }}>
                          <u>File: </u>
                        </strong>
                        <span>{project.fileName}</span>
                      </div>
                    </div>
                  }
                  open={isTooltipOpen}
                  disableFocusListener
                  disableHoverListener
                  disableTouchListener
                >
                  <IconButton aria-label="edit" size="large" onClick={() => setIsTooltipOpen(true)}>
                    <InfoIcon />
                  </IconButton>
                </Tooltip>
              </div>
            </ClickAwayListener>
          </div>
        </Card>
      </div>
    </Tooltip>
  );
};
