import React from "react";
import AddProject from "./AddProject";

export default function Modal(props) {
	const { modal, setModal, projects, setProjects } = props;

	return (
		<div className={modal ? "modal active" : "modal"}>
			{modal === "add-project" && (
				<AddProject
					setModal={setModal}
					projects={projects}
					setProjects={setProjects}
				/>
			)}
		</div>
	);
}
