import { Button } from "@alexandergridin/rtc-components-lib";
import { Page } from "components/Page";
import { TodoCardsList } from "components/TodoCardsList";
import { useNavigate, useParams } from "react-router-dom";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useEffect, useState } from "react";
import { loadProjectAsync } from "services";
import { Project, TodoItem } from "models";

export const ProjectPage = () => {
  const [project, setProject] = useState<Project | null>(null);
  const navigate = useNavigate();
  const { id } = useParams();

  const loadProject = async () => {
    const loadedProject = await loadProjectAsync(id as string);

    if (loadedProject) {
      setProject(loadedProject);
    }
  };

  useEffect(() => {
    loadProject();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleBackClick = () => {
    navigate("/");
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
      <TodoCardsList todos={[...project.activeTodos, { ...new TodoItem(), title: "Test" }]} />

      {project.completedTodos.length !== 0 && (
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
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
