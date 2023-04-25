import { DeleteButton } from "components/DeleteButton";
import { Card } from "@alexandergridin/rtc-components-lib";
import { Project } from "models";

import style from "./ProjectCard.module.css";

interface ProjectCardProps {
	project: Project;
	onDelete: (project: Project) => void;
}

export const ProjectCard = ({ project, onDelete }: ProjectCardProps) => {
	const handleDeleteClick = () => {
		onDelete(project);
	};

	return (
		<Card minHeight={150}>
			<div className={style.header}>
				<h2 style={{ color: "#000" }}>{project.title}</h2>

				<DeleteButton
					tooltipText="Delete Project"
					onClick={handleDeleteClick}
				/>
			</div>
		</Card>
	);
};
