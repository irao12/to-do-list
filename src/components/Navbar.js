import React from "react";
import checkbox from "../images/checkbox-outline.png";

export default function Navbar(props) {
	const { isMenuOpen, setIsMenuOpen } = props;

	const toggleMenu = () => {
		setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
	};

	return (
		<nav className="flex__navbar">
			<div className="flex__navbar flex__navbar--logo">
				<img src={checkbox} alt="checkbox" />
				<div className="logo-text">To-Do-List</div>
			</div>

			<div
				onClick={toggleMenu}
				className={"project-toggle" + (isMenuOpen ? " open" : "")}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					className="menu"
				>
					<path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z" />
				</svg>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					className="close"
				>
					<path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
				</svg>
			</div>
		</nav>
	);
}
