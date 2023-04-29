import { useEffect, useState } from "react";

import { ProjectsPage } from "pages/ProjectsPage";
import { initAsync } from "services";

function App() {
  const [isInit, setIsInit] = useState(false);

  const init = async () => {
    const initMessage = await initAsync();
    console.log(initMessage);
    setIsInit(true);
  };

  useEffect(() => {
    init();
  }, []);

  return isInit ? <ProjectsPage /> : null;
}

export default App;
