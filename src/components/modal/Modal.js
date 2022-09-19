import React from "react";
import AddProject from "./AddProject";
import ConfirmDeleteProject from "./ConfirmDeleteProject";
import AddTask from "./AddTask";
import ConfirmDeleteTask from "./ConfirmDeleteTask";

export default function Modal(props) {
	const {
		modal,
		setModal,
		projects,
		setProjects,
		currProject,
		setCurrProject,
		target,
		setTarget,
	} = props;

	return (
		<div className={modal ? "modal active" : "modal"}>
			{modal === "add-project" && (
				<AddProject
					setModal={setModal}
					projects={projects}
					setProjects={setProjects}
				/>
			)}

			{modal === "delete-project" && (
				<ConfirmDeleteProject
					setModal={setModal}
					currProject={currProject}
					setCurrProject={setCurrProject}
					projects={projects}
					setProjects={setProjects}
					target={target}
					setTarget={setTarget}
				/>
			)}

			{modal === "add-task" && (
				<AddTask
					setModal={setModal}
					projects={projects}
					currProject={currProject}
					setCurrProject={setCurrProject}
					setProjects={setProjects}
					target={target}
					setTarget={setTarget}
				/>
			)}

			{modal === "delete-task" && (
				<ConfirmDeleteTask
					setModal={setModal}
					currProject={currProject}
					projects={projects}
					setProjects={setProjects}
					target={target}
					setTarget={setTarget}
				/>
			)}
		</div>
	);
}
