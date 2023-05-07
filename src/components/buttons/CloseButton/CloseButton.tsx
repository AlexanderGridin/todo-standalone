import MuiIconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Tooltip from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";

const IconButton = styled(MuiIconButton)({
  transition: "all 0.4s",
  backgroundColor: "rgba(255,255,255,0.2)",
  "&:hover": {
    backgroundColor: "rgba(255,255,255,0.4)",
  },
});

export interface CloseButtonProps {
  tooltipText?: string;
  onClick: () => void;
}

export const CloseButton = ({ tooltipText = "", onClick }: CloseButtonProps) => {
  return (
    <Tooltip title={tooltipText && <span style={{ fontFamily: "Comfortaa" }}>{tooltipText}</span>}>
      <IconButton size="large" onClick={onClick}>
        <CloseIcon sx={{ color: "#FFF" }} />
      </IconButton>
    </Tooltip>
  );
};
