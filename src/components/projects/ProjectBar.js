import React from "react";
import Project from "./Project";

export default function Projects(props) {
	const { projectList, setModal } = props;

	const showAddProject = () => {
		setModal("add-project");
	};

	return (
		<div className="main__projects">
			<div className="project-header">
				<h1>Projects</h1>
				<button
					className="add-button add-project"
					onClick={showAddProject}
				>
					+
				</button>
			</div>
			<div className="project-list">
				{projectList.map((currProject, index) => (
					<Project key={index} project={currProject} />
				))}
			</div>
		</div>
	);
}
