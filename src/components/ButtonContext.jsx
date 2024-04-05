import React from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { LocaleContext, ThemeContext } from "../context/Context";

function ButtonContext() {
	const { locale, toggleLocale } = React.useContext(LocaleContext);
	const { theme, toggleTheme } = React.useContext(ThemeContext);
	return (
		<div className="flex gap-6">
			<button onClick={toggleLocale} className="dark:text-white">
				{locale === "EN" ? "EN" : "ID"}
			</button>
			<button onClick={toggleTheme}>
				{theme === "light" ? (
					<FiSun className="dark:text-white" />
				) : (
					<FiMoon className="dark:text-white" />
				)}
			</button>
		</div>
	);
}

export default ButtonContext;
