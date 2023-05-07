import IconButton from "@mui/material/IconButton";
import StopIcon from "@mui/icons-material/Stop";
import Tooltip from "@mui/material/Tooltip";

export interface StopButtonProps {
  tooltipText?: string;
  onClick: () => void;
}

export const StopButton = ({ tooltipText = "", onClick }: StopButtonProps) => {
  return (
    <Tooltip title={tooltipText}>
      <IconButton size="large" onClick={onClick}>
        <StopIcon />
      </IconButton>
    </Tooltip>
  );
};
