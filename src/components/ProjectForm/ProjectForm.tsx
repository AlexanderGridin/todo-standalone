import { ChangeEvent, FormEvent, useReducer } from "react";
import { Button, TextInput } from "@alexandergridin/rtc-components-lib";
import { Project } from "models";

import style from "./ProjectForm.module.css";

export class ProjectFormValue {
	public name = "";
}

interface ProjectFormProps {
	project: Project | null;
	onSubmit: (project: Project) => void;
	onCancel: () => void;
}

export const ProjectForm = ({
	project,
	onSubmit,
	onCancel,
}: ProjectFormProps) => {
	const initialValue = project
		? { name: project.name }
		: { ...new ProjectFormValue() };

	const [formValue, setControlValue] = useReducer(
		(formValue: ProjectFormValue, controlValue: Partial<ProjectFormValue>) => ({
			...formValue,
			...controlValue,
		}),
		initialValue
	);

	const handleSubmit = (e?: FormEvent<HTMLFormElement>) => {
		e?.preventDefault();

		if (project) {
			const updatedProject = {
				...project,
				...formValue,
			};

			onSubmit(updatedProject);
			return;
		}

		const newProject: Project = {
			...new Project(),
			...formValue,
			createdTime: new Date().getTime(),
		};

		const projectToCreate: Project = {
			...newProject,
			fileName: `${newProject.id}.json`,
		};

		onSubmit(projectToCreate);
	};

	const handleCancelClick = () => {
		onCancel();
	};

	const handleFormValueChange = (e: ChangeEvent<HTMLInputElement>) => {
		setControlValue({ [e.target.name]: e.target.value });
	};

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<TextInput
					id="name"
					name="name"
					label="Name"
					placeholder="Enter project name"
					isAutoFocus
					value={formValue.name}
					onChange={handleFormValueChange}
				/>
			</div>

			<div className={style.footer}>
				<Button style={{ marginRight: "10px" }} onClick={handleSubmit}>
					{project ? "Update" : "Add"}
				</Button>

				<Button visualStyle="error" onClick={handleCancelClick}>
					Cancel
				</Button>
			</div>
		</form>
	);
};
