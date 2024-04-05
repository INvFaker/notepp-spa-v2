import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { FiArchive, FiFilePlus, FiFileText, FiLogOut } from "react-icons/fi";
import ButtonContext from "./ButtonContext";

function Navbar({ onLogout }) {
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
					<li>
						<button onClick={onLogout}>
							<FiLogOut className="w-8 h-8 dark:text-white" />
						</button>
					</li>
				</ul>
			</nav>
		</>
	);
}

Navbar.propTypes = {
	onLogout: PropTypes.func.isRequired,
};

export default Navbar;
