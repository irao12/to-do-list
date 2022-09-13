import React from "react";
import Project from "./Project";

export default function Projects(props) {
	const { projects, setProjects, setCurrProject, setModal, setTarget } =
		props;

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
				{projects.map((project, index) => (
					<Project
						key={index}
						project={project}
						setProjects={setProjects}
						setCurrProject={setCurrProject}
						setModal={setModal}
						setTarget={setTarget}
					/>
				))}
			</div>
		</div>
	);
}
