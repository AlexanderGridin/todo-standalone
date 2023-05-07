import { useEffect } from "react";

import { Page } from "components/Page";
import { setProjectsAction } from "store/actions/projects";
import { useAppState } from "store/hooks";
import { ProjectsCardsList } from "components/project";
import { getProjectsAsync } from "services";

export const ProjectsPage = () => {
  const state = useAppState();

  const loadProjects = async () => {
    const projects = await getProjectsAsync();
    state.dispatch(setProjectsAction(projects));
  };

  useEffect(() => {
    loadProjects();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Page title="Projects">
      <ProjectsCardsList />
    </Page>
  );
};
