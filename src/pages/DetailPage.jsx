import React, { useEffect, useState } from "react";
import NoteDetail from "../components/NoteDetail";
import { getNote, archiveNote, unarchiveNote, deleteNote } from "../utils/api";
import { useNavigate, useParams } from "react-router-dom";

function DetailPage() {
	const [note, setNote] = useState([]);
	const { id } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		getNote(id).then(({ data }) => {
			setNote(data);
		});
	}, [id]);

	const onMoveEventHandler = () => {
		if (note.archived === true) {
			unarchiveNote(id);
			navigate("/");
		} else {
			archiveNote(id);
			navigate("/archive");
		}
	};

	const onDeleteEventHandler = () => {
		deleteNote(id);
		navigate("/");
	};

	return (
		<section className="px-9 pt-9">
			{note.length !== 0 ? (
				<NoteDetail
					{...note}
					onMove={onMoveEventHandler}
					onDelete={onDeleteEventHandler}
				/>
			) : (
				<p>Loading...</p>
			)}
		</section>
	);
}

export default DetailPage;
