import React from "react";
import { LocaleContext } from "../context/Context";

function Logo() {
	const { locale } = React.useContext(LocaleContext);

	return (
		<h1 className="text-4xl w-[275px] font-bold dark:text-white">
			{locale === "EN" ? "Notes App" : "Aplikasi Catatan"}
		</h1>
	);
}

export default Logo;
