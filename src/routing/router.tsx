import { createHashRouter } from "react-router-dom";

import { ProjectsPage } from "pages/ProjectsPage";
import { ProjectPage } from "pages/ProjectPage";

import { App } from "../App";

export const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <ProjectsPage />,
      },
      {
        path: "project/:id",
        element: <ProjectPage />,
      },
    ],
  },
]);
