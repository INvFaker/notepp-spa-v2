import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { changeFormatDate } from "../utils/local-data";
import parse from "html-react-parser";

function NoteItem({ id, title, createdAt, body }) {
	return (
		<div className="border-2 rounded-lg p-4">
			<div>
				<h1 className="font-bold text-base underline dark:text-white">
					<Link to={`/notes/${id}`}>{title}</Link>
				</h1>
				<p className="font-semibold text-sm dark:text-white">
					{changeFormatDate(createdAt)}
				</p>
			</div>
			<div className="text-sm line-clamp-6 dark:text-white">
				{parse(body)}
			</div>
		</div>
	);
}

NoteItem.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	createdAt: PropTypes.string.isRequired,
	body: PropTypes.string.isRequired,
};

export default NoteItem;
