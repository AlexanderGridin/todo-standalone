import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import Tooltip from "@mui/material/Tooltip";

export interface EditButtonProps {
  tooltipText?: string;
  onClick: () => void;
}

export const EditButton = ({ tooltipText = "", onClick }: EditButtonProps) => {
  return (
    <Tooltip title={tooltipText && <span style={{ fontFamily: "Comfortaa" }}>{tooltipText}</span>}>
      <IconButton aria-label="edit" size="large" onClick={onClick}>
        <EditIcon />
      </IconButton>
    </Tooltip>
  );
};
