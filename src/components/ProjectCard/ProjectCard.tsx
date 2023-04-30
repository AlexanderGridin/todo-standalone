import { DeleteButton } from "components/DeleteButton";
import { Card } from "@alexandergridin/rtc-components-lib";
import { Project } from "models";
import InfoIcon from "@mui/icons-material/Info";
import ClickAwayListener from "@mui/material/ClickAwayListener";

import style from "./ProjectCard.module.css";
import { removeProjectAsync } from "services";
import { useAppState } from "store/hooks";
import { removeProjectAction, updateProjectAction } from "store/actions/project";
import { EditButton } from "components/EditButton";
import { openModalAction } from "store/actions/modal";
import { Tooltip } from "@mui/material";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";

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

    state.dispatch(openModalAction("ProjectModal"));
  };

  const handleDeleteClick = async () => {
    const removedProject = await removeProjectAsync(project);
    state.dispatch(removeProjectAction(removedProject));
  };

  const handleDblClick = () => {
    navigate(`project/${project.id}`);
  };

  const getProjectCreatedDateTime = () => {
    const date = new Date(project.createdTime);
    const [m, d, y] = date.toLocaleDateString().split("/");
    const time = `${date.getHours()}:${date.getMinutes()}`;
    return `${d}.${Number(m) < 10 ? "0" + m : m}.${y} ${time}`;
  };

  return (
    <Card minHeight={150} onDoubleClick={handleDblClick} className={style.card}>
      <div className={style.header}>
        <h2 style={{ color: "#000" }}>{project.name}</h2>

        <div>
          <EditButton tooltipText="Edit project" onClick={handleEditClick} />
          <DeleteButton tooltipText="Delete project" onClick={handleDeleteClick} />
        </div>
      </div>

      <div className={style.created}>
        <ClickAwayListener onClickAway={() => setIsTooltipOpen(false)}>
          <div>
            <Tooltip
              placement="top"
              arrow
              title={
                <div style={{ padding: "7px" }}>
                  <div style={{ marginBottom: "7px" }}>
                    <strong>
                      <u>Created:</u>{" "}
                    </strong>
                    <span>{getProjectCreatedDateTime()}</span>
                  </div>

                  <div>
                    <strong>
                      <u>File:</u>{" "}
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
  );
};
