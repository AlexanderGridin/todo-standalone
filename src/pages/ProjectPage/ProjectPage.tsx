import { Button } from "@alexandergridin/rtc-components-lib";
import { Page } from "components/Page";
import { TodoCardsList, TodoCard } from "components/todo";
import { useNavigate, useParams } from "react-router-dom";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useEffect } from "react";
import { loadProjectAsync, updateProjectAsync } from "services";
import { useAppState } from "store/hooks";
import { setOpenedProjectAction } from "store/actions/openedProject";

export const ProjectPage = () => {
  const state = useAppState();
  const project = state.openedProject;

  const navigate = useNavigate();
  const { id } = useParams();

  const loadProject = async () => {
    const project = await loadProjectAsync(id ?? "");

    if (project) {
      state.dispatch(setOpenedProjectAction({ ...project }));
    }
  };

  useEffect(() => {
    loadProject();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateProject = async () => {
    if (!project) {
      return;
    }

    await updateProjectAsync(project);
  };

  useEffect(() => {
    updateProject();
    console.log("Update project effect");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [project]);

  const handleBackClick = () => {
    state.dispatch(setOpenedProjectAction(null));
    navigate(-1);
  };

  const subHeader = (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div style={{ marginBottom: "25px" }}>
        <Button onClick={handleBackClick}>Back</Button>
      </div>
    </div>
  );

  return project ? (
    <Page title={project.name}>
      {subHeader}

      {project.inProgressTodo ? (
        <div style={{ marginBottom: "25px" }}>
          <TodoCard todo={project.inProgressTodo} />
        </div>
      ) : null}

      <div
        style={{
          marginBottom: "25px",
          opacity: `${project.inProgressTodo ? "0.5" : "1"}`,
          pointerEvents: `${project.inProgressTodo ? "none" : "all"}`,
        }}
      >
        <TodoCardsList todos={project.activeTodos} />
      </div>

      {project.completedTodos.length !== 0 && (
        <Accordion sx={{ backgroundColor: "#a3be8c", color: "#000" }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ padding: "7px 25px" }}>
            <h2>Completed todos</h2>
          </AccordionSummary>

          <AccordionDetails>
            <TodoCardsList todos={project.completedTodos} isShowAddButton={false} />
          </AccordionDetails>
        </Accordion>
      )}
    </Page>
  ) : (
    <Page title="Project not found...">{subHeader}</Page>
  );
};
