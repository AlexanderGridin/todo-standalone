import { useEffect, useState } from "react";

import { initAsync } from "services";
import { Outlet } from "react-router-dom";

export const App = () => {
  const [isInit, setIsInit] = useState(false);

  const init = async () => {
    const initMessage = await initAsync();
    console.log(initMessage);
    setIsInit(true);
  };

  useEffect(() => {
    init();
  }, []);

  return isInit ? <Outlet /> : null;
};
