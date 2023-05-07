import IconButton from "@mui/material/IconButton";
import PlayIcon from "@mui/icons-material/PlayArrow";
import Tooltip from "@mui/material/Tooltip";

export interface StartButtonProps {
  tooltipText?: string;
  onClick: () => void;
}

export const StartButton = ({ tooltipText = "", onClick }: StartButtonProps) => {
  return (
    <Tooltip title={tooltipText}>
      <IconButton size="large" onClick={onClick}>
        <PlayIcon />
      </IconButton>
    </Tooltip>
  );
};
