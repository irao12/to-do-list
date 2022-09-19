import React from "react";
import DeleteButton from "../buttons/DeleteButton";

export default function Project(props) {
	const {
		project,
		projects,
		setCurrProject,
		setModal,
		setTarget,
		setIsMenuOpen,
	} = props;

	const handleClick = () => {
		setCurrProject(projects.indexOf(project));
		setIsMenuOpen(false);
	};

	const confirmDelete = () => {
		setTarget(projects.indexOf(project));
		setModal("delete-project");
	};

	return (
		<div className="project-div">
			<div onClick={handleClick} className="project-title-section">
				<h2>{project.title}</h2>
			</div>
			<DeleteButton handleClick={confirmDelete} role="project" />
		</div>
	);
}
