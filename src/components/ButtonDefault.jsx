import React from "react";
import { PropTypes } from "prop-types";

function ButtonDefault({ onClick, children }) {
	return (
		<button onClick={onClick} className="dark:text-white">
			{children}
		</button>
	);
}

ButtonDefault.propTypes = {
	onClick: PropTypes.func.isRequired,
	children: PropTypes.node.isRequired,
};

export default ButtonDefault;
