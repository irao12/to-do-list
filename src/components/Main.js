import React from "react";
import ProjectBar from "./projects/ProjectBar";
import TaskMenu from "./tasks/TaskMenu";

export default function Main(props) {
	const {
		projects,
		setProjects,
		currProject,
		setCurrProject,
		setModal,
		setTarget,
	} = props;

	return (
		<main className="flex__main main">
			<ProjectBar
				projects={projects}
				setProjects={setProjects}
				setCurrProject={setCurrProject}
				setModal={setModal}
				setTarget={setTarget}
			/>
			<TaskMenu
				currProject={currProject}
				setCurrProject={setCurrProject}
			/>
		</main>
	);
}
