import React from "react";

export default function DeleteButton(props) {
	const { handleClick, role } = props;

	return (
		<div
			onClick={handleClick}
			className={
				role === "project"
					? "delete-project-button"
					: "delete-task-button"
			}
		>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
				<path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" />
			</svg>
		</div>
	);
}
