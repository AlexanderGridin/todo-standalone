import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Tooltip from "@mui/material/Tooltip";

export interface DeleteButtonProps {
	tooltipText?: string;
	onClick: () => void;
}

export const DeleteButton = ({
	tooltipText = "",
	onClick,
}: DeleteButtonProps) => {
	return (
		<Tooltip title={tooltipText}>
			<IconButton aria-label="delete" size="large" onClick={onClick}>
				<DeleteIcon />
			</IconButton>
		</Tooltip>
	);
};
