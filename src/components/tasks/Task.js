import React from "react";
import DeleteButton from "../buttons/DeleteButton";

/*
each task: {
    title: ...,
    desc: ...,
    dueDate: ...,
    priority: ...,
    isComplete: true/false,
}
*/

export default function Task(props) {
	const { task } = props;

	return (
		<div className="task-div">
			<div className="task-details">
				<h2>{task.title}</h2>
			</div>
			<DeleteButton />
		</div>
	);
}
