import React from "react";
import DeleteButton from "../buttons/DeleteButton";

export default function Project(props) {
	const { project, setCurrProject, setModal, setTarget } = props;

	const handleClick = () => {
		setCurrProject(project);
	};

	const confirmDelete = () => {
		setTarget(project);
		setModal("delete-project");
	};

	return (
		<div className="project-div">
			<div onClick={handleClick} className="project-title-section">
				<h2>{project.title}</h2>
			</div>
			<DeleteButton handleClick={confirmDelete} />
		</div>
	);
}
