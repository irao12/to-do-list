import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Modal from "./components/modal/Modal";

function App() {
	const [projects, setProjects] = useState([]);
	const [currProject, setCurrProject] = useState({});
	const [modal, setModal] = useState("");

	return (
		<>
			<div className="flex">
				<Navbar />
				<Main
					projects={projects}
					setProjects={setProjects}
					setCurrProject={setCurrProject}
					setModal={setModal}
				/>
			</div>
			<Modal
				modal={modal}
				setModal={setModal}
				projects={projects}
				setProjects={setProjects}
			/>
		</>
	);
}

export default App;
