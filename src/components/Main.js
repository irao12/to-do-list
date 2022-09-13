import React from "react";
import ProjectBar from "./projects/ProjectBar";
import TaskMenu from "./tasks/TaskMenu";

export default function Main(props) {
	const { projects, setProjects, setCurrProject, setModal } = props;

	return (
		<main className="flex__main main">
			<ProjectBar projectList={projects} setModal={setModal} />
			<TaskMenu />
		</main>
	);
}
