import React, { useEffect, useState } from "react";
import NoteItemList from "../components/NoteItemList";
import { getArchivedNotes } from "../utils/api";
import Searchbar from "../components/Searchbar";
import { useSearchParams } from "react-router-dom";
import { LocaleContext } from "../context/Context";
import { ThreeDots } from "react-loader-spinner";

function ArchivePage() {
	const [searchParams, setSearchParams] = useSearchParams();
	const [notes, setNotes] = useState([]);
	const [keywords, setKeywords] = useState(() => {
		return searchParams.get("keyword") || "";
	});
	const [loading, setLoading] = useState(true);

	const { locale } = React.useContext(LocaleContext);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const responeData = await getArchivedNotes();
				if (responeData.error) throw new Error(responeData.message);
				setNotes(responeData.data);
				setLoading(false);
			} catch (error) {
				console.error("Error fetching notes:", error);
			}
		};

		// fetchData();
		const delay = setTimeout(() => {
			fetchData();
		}, 800);

		return () => clearTimeout(delay);
	}, []);

	const handleKeywordChange = (valueKeywords) => {
		setKeywords(valueKeywords);
		setSearchParams({ title: valueKeywords });
	};

	const filteredNotes = notes.filter((note) => {
		return note.title.toLowerCase().includes(keywords.toLowerCase());
	});

	return (
		<section className="px-9">
			<div className="flex items-center justify-between">
				<h1 className="text-2xl font-semibold my-4 dark:text-white">
					{locale === "EN" ? "Archive Page" : "Halaman Arsip"}
				</h1>
				<Searchbar
					placeholder="find notes ..."
					value={keywords}
					keywordChange={handleKeywordChange}
				/>
			</div>
			<div className="grid sm:grid-cols-3 md:grid-cols-4  gap-4">
				{loading ? (
					<ThreeDots
						visible={true}
						height="80"
						width="80"
						color="#4fa94d"
						radius="9"
						ariaLabel="three-dots-loading"
						wrapperStyle={{}}
						wrapperClass=""
					/>
				) : notes.length === 0 ? (
					<p className="text-2xl text-center min-h-[70vh] leading-[70vh] dark:text-white">
						Catatan tidak ditemukan!
					</p>
				) : (
					<NoteItemList notes={filteredNotes} />
				)}
			</div>
		</section>
	);
}

export default ArchivePage;
