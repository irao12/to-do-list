import React from "react";

export default function AddTaskButton(props) {
	const { setModal } = props;

	const handleClick = () => {
		setModal("add-task");
	};

	return (
		<div onClick={handleClick} className="add-new-task">
			<div className="add-task-button">+</div>
			<h2 className="add-task-test">Add task</h2>
		</div>
	);
}
