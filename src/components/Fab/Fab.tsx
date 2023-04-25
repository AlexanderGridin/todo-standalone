import FabMui from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Tooltip from "@mui/material/Tooltip";

import style from "./Fab.module.css";

interface FabProps {
	tooltipText?: string;
	onClick: () => void;
}

export const Fab = ({ tooltipText = "", onClick }: FabProps) => {
	return (
		<div className={style.container}>
			<Tooltip title={tooltipText}>
				<FabMui color="primary" onClick={onClick}>
					<AddIcon />
				</FabMui>
			</Tooltip>
		</div>
	);
};
