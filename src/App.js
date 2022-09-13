import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Modal from "./components/modal/Modal";

function App() {
	// array of the projects
	const [projects, setProjects] = useState([]);
	// keeps track of which project's tasks is displayed
	const [currProject, setCurrProject] = useState(null);
	// keeps track of which modal is active
	const [modal, setModal] = useState("");
	// keeps track of which project or task is targeted for a delete or edit
	const [target, setTarget] = useState(null);

	return (
		<>
			<div className="flex">
				<Navbar />
				<Main
					projects={projects}
					setProjects={setProjects}
					currProject={currProject}
					setCurrProject={setCurrProject}
					setModal={setModal}
					target={target}
					setTarget={setTarget}
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
