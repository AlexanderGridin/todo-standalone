import { useContext } from "react";
import { AppContext } from "store/components/AppContext";

export const useAppState = () => {
  return useContext(AppContext);
};
