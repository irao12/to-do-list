import React from "react";

export default function Main() {
	return (
		<main className="flex__main main">
			<div className="main__projects">
				<div className="project-header">
					<h1>Projects</h1>
					<button className="add-button add-project">+</button>
				</div>
				<div className="project-list"></div>
			</div>
			<div className="main__tasks-section">
				<div className="main__tasks">
					<div className="tasks-header">
						<h1>Tasks</h1>
					</div>
					<div className="task-list"></div>
				</div>
			</div>
		</main>
	);
}
