import MuiIconButton from "@mui/material/IconButton";
import BackIcon from "@mui/icons-material/ArrowBack";
import Tooltip from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";

const IconButton = styled(MuiIconButton)({
  transition: "all 0.4s",
  backgroundColor: "rgba(255,255,255,0.2)",
  "&:hover": {
    backgroundColor: "rgba(255,255,255,0.4)",
  },
});

export interface BackButtonProps {
  tooltipText?: string;
  onClick: () => void;
}

export const BackButton = ({ tooltipText = "", onClick }: BackButtonProps) => {
  return (
    <Tooltip title={tooltipText && <span style={{ fontFamily: "Comfortaa" }}>{tooltipText}</span>}>
      <IconButton size="large" onClick={onClick}>
        <BackIcon sx={{ color: "#FFF" }} />
      </IconButton>
    </Tooltip>
  );
};
