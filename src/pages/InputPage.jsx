import React, { useContext } from "react";
import { CgCheckR } from "react-icons/cg";
import useInput from "../hooks/useInput";
import { addNote } from "../utils/api";
import { useNavigate } from "react-router-dom";
import { LocaleContext } from "../context/Context";

function InputPage() {
	const [title, handleTitleInput] = useInput("");
	const [body, handleBodyInput] = useInput("");
	const navigate = useNavigate();
	const { locale } = useContext(LocaleContext);

	const handleSubmitForm = async (e) => {
		e.preventDefault();
		addNote({ title, body });
		navigate("/");
	};

	return (
		<section className="px-9 pt-9">
			<h1 className="text-3xl font-bold my-4 dark:text-white">
				{locale === "EN" ? "Make New Note" : "Buat Catatan Baru"}
			</h1>
			<form
				className="border-2 rounded-lg p-4 h-[70vh] relative"
				onSubmit={handleSubmitForm}
			>
				<input
					className="text-5xl w-full py-2 block bg-inherit border-white rounded-xl focus:outline-none dark:text-white"
					type="text"
					placeholder="Judul Catatan"
					value={title}
					onChange={handleTitleInput}
				/>
				<textarea
					className="text-3xl w-full h-[45vh] mb-4 py-2 block bg-inherit border-white focus:outline-none dark:text-white"
					placeholder="Deskripsi catatan"
					value={body}
					onChange={handleBodyInput}
				/>
				<button
					type="submit"
					className="absolute bottom-3 right-3 dark:text-white"
				>
					<CgCheckR className="w-8 h-8" />
				</button>
			</form>
		</section>
	);
}

export default InputPage;
