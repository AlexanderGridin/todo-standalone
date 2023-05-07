import FabMuiNonStyled from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Tooltip from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";

import style from "./Fab.module.css";

const FabMui = styled(FabMuiNonStyled)({
  color: "#FFF",
  backgroundColor: "#5e81ac",
  transition: "background 0.4s",
  "&:hover": {
    backgroundColor: "#527096",
  },
});

interface FabProps {
  tooltipText?: string;
  onClick: () => void;
}

export const Fab = ({ tooltipText = "", onClick }: FabProps) => {
  return (
    <div className={style.container}>
      <Tooltip title={tooltipText && <span style={{ fontFamily: "Comfortaa" }}>{tooltipText}</span>}>
        <FabMui onClick={onClick}>
          <AddIcon />
        </FabMui>
      </Tooltip>
    </div>
  );
};
