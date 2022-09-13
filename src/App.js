import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Modal from "./components/Modal";

function App() {
	return (
		<>
			<div className="flex">
				<Navbar />
				<Main />
			</div>
			<Modal />
		</>
	);
}

export default App;
