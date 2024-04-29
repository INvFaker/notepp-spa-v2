import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { FiArchive, FiFilePlus, FiFileText, FiLogOut } from "react-icons/fi";
import ButtonContext from "./ButtonContext";

function Navbar({ onLogout, name }) {
	return (
		<>
			<ButtonContext />
			<nav>
				<ul className="flex gap-6">
					<li>
						<Link to={"/"}>
							<FiFileText className="w-8 h-8 dark:text-white" />
						</Link>
					</li>
					<li>
						<Link to={"/archive"}>
							<FiArchive className="w-8 h-8 dark:text-white" />
						</Link>
					</li>
					<li>
						<Link to={"/input"}>
							<FiFilePlus className="w-8 h-8 dark:text-white" />
						</Link>
					</li>
					<li className="flex gap-2">
						<div className="flex items-center gap-1 dark:text-white">
							<h1 className="text-xl">{name}</h1>
						</div>
						<button onClick={onLogout} className="dark:text-white">
							<FiLogOut className="w-8 h-8 " />
						</button>
					</li>
				</ul>
			</nav>
		</>
	);
}

Navbar.propTypes = {
	onLogout: PropTypes.func.isRequired,
	name: PropTypes.string.isRequired,
};

export default Navbar;
