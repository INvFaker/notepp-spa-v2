import React from "react";
import NoteItem from "./NoteItem";
import PropTypes from "prop-types";

function NoteItemList({ notes }) {
	return (
		<>
			{notes.map((note) => (
				<NoteItem key={note.id} id={note.id} {...note} />
			))}
		</>
	);
}

NoteItemList.propTypes = {
	notes: PropTypes.array.isRequired,
};

export default NoteItemList;
