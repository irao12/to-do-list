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
		isMenuOpen,
		setIsMenuOpen,
	} = props;

	return (
		<main className="flex__main main">
			<ProjectBar
				projects={projects}
				setProjects={setProjects}
				setCurrProject={setCurrProject}
				setModal={setModal}
				setTarget={setTarget}
				isMenuOpen={isMenuOpen}
				setIsMenuOpen={setIsMenuOpen}
			/>
			<TaskMenu
				projects={projects}
				currProject={currProject}
				setModal={setModal}
				setCurrProject={setCurrProject}
				setTarget={setTarget}
			/>
		</main>
	);
}
