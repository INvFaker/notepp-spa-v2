import React from "react";
import { PropTypes } from "prop-types";
import { changeFormatDate } from "../utils/local-data";
import ButtonDefault from "./ButtonDefault";
import { CgArrowDownR, CgArrowUpR, CgTrash } from "react-icons/cg";
import parse from "html-react-parser";

function NoteDetail({
	id,
	title,
	createdAt,
	body,
	archived,
	onMove,
	onDelete,
}) {
	return (
		<section className="border-2 border-black rounded-lg p-4 min-h-[70vh] relative  dark:border-white">
			<h1 className="text-6xl dark:text-white">{title}</h1>
			<p className="text-base mt-3 dark:text-white">
				{changeFormatDate(createdAt)}
			</p>
			<div className="text-lg mt- dark:text-white">{parse(body)}</div>
			<div className="flex gap-6 absolute bottom-8 right-8">
				<ButtonDefault onClick={() => onDelete(id)}>
					<CgTrash className="w-7 h-7" />
				</ButtonDefault>
				<ButtonDefault onClick={() => onMove(id)}>
					{archived ? (
						<CgArrowUpR className="w-7 h-7" />
					) : (
						<CgArrowDownR className="w-7 h-7" />
					)}
				</ButtonDefault>
			</div>
		</section>
	);
}

NoteDetail.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	createdAt: PropTypes.string.isRequired,
	body: PropTypes.string.isRequired,
	archived: PropTypes.bool.isRequired,
	onMove: PropTypes.func.isRequired,
	onDelete: PropTypes.func.isRequired,
};

export default NoteDetail;

// import React from "react";
// import { PropTypes } from "prop-types";
// import { changeFormatDate } from "../utils/local-data";
// import ButtonDefault from "./ButtonDefault";
// import { CgArrowDownR, CgArrowUpR, CgTrash } from "react-icons/cg";
// import parse from "html-react-parser";

// function NoteDetail({
// 	id,
// 	title,
// 	createdAt,
// 	body,
// 	onMove,
// 	archived,
// 	onDelete,
// }) {
// 	return (
// 		<section className="border-2 rounded-lg p-4 min-h-[70vh] relative">
// 			<h1 className="text-6xl">{title}</h1>
// 			<p className="text-base mt-3">{changeFormatDate(createdAt)}</p>
// 			<div className="text-lg mt-5">{parse(body)}</div>
// 			<div className="flex gap-6 absolute bottom-8 right-8">
// 				<ButtonDefault onClick={() => onDelete(id)}>
// 					<CgTrash className="w-7 h-7" />
// 				</ButtonDefault>
// 				<ButtonDefault onClick={() => onMove(id)}>
// 					{archived ? (
// 						<CgArrowUpR className="w-7 h-7" />
// 					) : (
// 						<CgArrowDownR className="w-7 h-7" />
// 					)}
// 				</ButtonDefault>
// 			</div>
// 		</section>
// 	);
// }

// NoteDetail.propTypes = {
// 	id: PropTypes.string.isRequired,
// 	title: PropTypes.string.isRequired,
// 	createdAt: PropTypes.string.isRequired,
// 	body: PropTypes.string.isRequired,
// 	archived: PropTypes.bool.isRequired,
// 	onMove: PropTypes.func.isRequired,
// 	onDelete: PropTypes.func.isRequired,
// };

// export default NoteDetail;
