import React from "react";
import AddProject from "./AddProject";
import ConfirmDeleteProject from "./ConfirmDeleteProject";
import AddTask from "./AddTask";
import ConfirmDeleteTask from "./ConfirmDeleteTask";
import ViewTask from "./ViewTask";
import { compareAsc } from "date-fns";

export default function Modal(props) {
	const {
		modal,
		setModal,
		projects,
		setProjects,
		currProject,
		setCurrProject,
		target,
		setTarget,
	} = props;

	const sortTasks = (prevProjects) => {
		prevProjects[currProject].tasks.sort((taskA, taskB) => {
			if (taskA.priority > taskB.priority) return -1;
			else if (taskA.priority < taskB.priority) return 1;
			else {
				// if priorities are equal, sort based on the due date
				// tasks with no due dates should be at the end
				if (!taskA.dueDate && taskB.dueDate) return 1;
				else if (!taskB.dueDate && taskA.dueDate) return -1;
				else if (!taskA.dueDate && !taskB.dueDate) return 0;
				else {
					// if both dates are valid, the earlier one is first
					return compareAsc(
						Date.parse(taskA.dueDate),
						Date.parse(taskB.dueDate)
					);
				}
			}
		});
	};

	return (
		<div className={modal ? "modal active" : "modal"}>
			{modal === "add-project" && (
				<AddProject
					setModal={setModal}
					projects={projects}
					setProjects={setProjects}
				/>
			)}

			{modal === "delete-project" && (
				<ConfirmDeleteProject
					setModal={setModal}
					currProject={currProject}
					setCurrProject={setCurrProject}
					projects={projects}
					setProjects={setProjects}
					target={target}
					setTarget={setTarget}
				/>
			)}

			{modal === "add-task" && (
				<AddTask
					setModal={setModal}
					projects={projects}
					currProject={currProject}
					setCurrProject={setCurrProject}
					setProjects={setProjects}
					target={target}
					setTarget={setTarget}
					sortTasks={sortTasks}
				/>
			)}

			{modal === "delete-task" && (
				<ConfirmDeleteTask
					setModal={setModal}
					currProject={currProject}
					projects={projects}
					setProjects={setProjects}
					target={target}
					setTarget={setTarget}
				/>
			)}

			{modal === "view-task" && (
				<ViewTask
					projects={projects}
					setProjects={setProjects}
					currProject={currProject}
					target={target}
					setTarget={setTarget}
					setModal={setModal}
					sortTasks={sortTasks}
				/>
			)}
		</div>
	);
}
