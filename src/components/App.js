import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Main from "./Main";
import Modal from "./modal/Modal";

function App() {
	// array of the projects
	const [projects, setProjects] = useState(
		localStorage.getItem("projects")
			? JSON.parse(localStorage.getItem("projects"))
			: []
	);
	// keeps track of which project's tasks is displayed
	// currProject holds the index of the current project, -1 if none
	const [currProject, setCurrProject] = useState(
		localStorage.getItem("currProject")
			? JSON.parse(localStorage.getItem("currProject"))
			: -1
	);

	// keeps track of which modal is active
	const [modal, setModal] = useState("");
	// keeps track of which project or task is targeted for a delete or edit
	const [target, setTarget] = useState(null);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const projectAsString = JSON.stringify(projects);

	useEffect(() => {
		localStorage.setItem("projects", JSON.stringify(projects));
	}, [projects, projectAsString]);

	useEffect(() => {
		localStorage.setItem("currProject", JSON.stringify(currProject));
	}, [currProject]);

	return (
		<>
			<div className="flex">
				<Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
				<Main
					projects={projects}
					setProjects={setProjects}
					currProject={currProject}
					setCurrProject={setCurrProject}
					setModal={setModal}
					target={target}
					setTarget={setTarget}
					isMenuOpen={isMenuOpen}
					setIsMenuOpen={setIsMenuOpen}
				/>
			</div>
			<Modal
				modal={modal}
				setModal={setModal}
				projects={projects}
				setProjects={setProjects}
				currProject={currProject}
				setCurrProject={setCurrProject}
				target={target}
				setTarget={setTarget}
			/>
		</>
	);
}

export default App;
