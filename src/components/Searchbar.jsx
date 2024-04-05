import React from "react";
import PropTypes from "prop-types";

function Searchbar({ placeholder, value, keywordChange }) {
	return (
		<input
			type="text"
			className="px-2 py-1 border border-black focus:border-blue-700"
			placeholder={placeholder}
			value={value}
			onChange={(e) => keywordChange(e.target.value)}
		/>
	);
}

Searchbar.propTypes = {
	placeholder: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	keywordChange: PropTypes.func.isRequired,
};
export default Searchbar;
