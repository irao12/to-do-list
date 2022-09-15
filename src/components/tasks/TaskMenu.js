import React from "react";
import AddTaskButton from "../buttons/AddTaskButton";

export default function Tasks(props) {
	const { currProject, setCurrProject } = props;

	return (
		<div className="main__tasks-section">
			<div className="main__tasks">
				<div className="tasks-header">
					<h1>Tasks</h1>
				</div>
				<div className="task-list">
					{currProject !== -1 && (
						<AddTaskButton setCurrProject={setCurrProject} />
					)}
				</div>
			</div>
		</div>
	);
}
