import React from "react";
import AddTaskButton from "../buttons/AddTaskButton";
import Task from "./Task";

export default function Tasks(props) {
	const { projects, currProject, setModal, setCurrProject, setTarget } =
		props;

	return (
		<div className="main__tasks-section">
			<div className="main__tasks">
				<div className="tasks-header">
					<h1>Tasks</h1>
				</div>
				<div className="task-list">
					{currProject > -1 &&
						projects[currProject].tasks.map((task, index) => {
							return (
								<Task
									task={task}
									key={index}
									projects={projects}
									currProject={currProject}
									setTarget={setTarget}
									setModal={setModal}
								/>
							);
						})}

					{currProject !== -1 && (
						<AddTaskButton
							setModal={setModal}
							setCurrProject={setCurrProject}
						/>
					)}
				</div>
			</div>
		</div>
	);
}
