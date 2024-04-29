import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ArchivePage from "./pages/ArchivePage";
import InputPage from "./pages/InputPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { getUserLogged, putAccessToken } from "./utils/api";
import DetailPage from "./pages/DetailPage";
import { LocaleContext, ThemeContext } from "./context/Context";
import NotFoundPage from "./pages/NotFoundPage";
import ButtonContext from "./components/ButtonContext";
import Logo from "./components/Logo";

function App() {
	const [authedUser, setAuthedUser] = useState(null);
	const [initializing, setInitializing] = useState(true);

	const [locale, setLocale] = useState(
		localStorage.getItem("locale") || "EN"
	);

	const toggleLocale = () => {
		setLocale((prevLocale) => {
			const newLocale = prevLocale === "EN" ? "ID" : "EN";
			localStorage.setItem("locale", newLocale);
			return newLocale;
		});
	};

	const LocaleContextValue = React.useMemo(() => {
		return {
			locale,
			toggleLocale,
		};
	}, [locale]);

	const [theme, setTheme] = useState(
		localStorage.getItem("theme") || "light"
	);

	const toggleTheme = () => {
		setTheme((prevTheme) => {
			const newTheme = prevTheme === "light" ? "dark" : "light";
			localStorage.setItem("theme", newTheme);
			return newTheme;
		});
	};

	const ThemeContextValue = React.useMemo(() => {
		return {
			theme,
			toggleTheme,
		};
	}, [theme]);

	useEffect(() => {
		getUserLogged().then(({ data }) => {
			setAuthedUser(data);
			setInitializing(false);
		});
	}, []);

	const onLoginSuccess = async ({ accessToken }) => {
		putAccessToken(accessToken);
		const { data } = await getUserLogged();
		setAuthedUser(data);
	};

	const onLogout = () => {
		setAuthedUser(null);
		putAccessToken("");
	};

	if (initializing) {
		return null;
	}

	if (authedUser === null) {
		return (
			<BrowserRouter>
				<LocaleContext.Provider value={LocaleContextValue}>
					<ThemeContext.Provider value={ThemeContextValue}>
						<div className={theme === "dark" ? "dark" : ""}>
							<div className="dark:bg-neutral-900 h-screen">
								<header className="max-w-[1200px] mx-auto px-9 py-6 flex justify-between items-center">
									<Logo />
									<ButtonContext />
								</header>
								<main className="max-w-[800px] mx-auto">
									<Routes>
										<Route
											path="/*"
											element={
												<LoginPage
													loginSuccess={
														onLoginSuccess
													}
												/>
											}
										/>
										<Route
											path="/register"
											element={<RegisterPage />}
										/>
									</Routes>
								</main>
							</div>
						</div>
					</ThemeContext.Provider>
				</LocaleContext.Provider>
			</BrowserRouter>
		);
	}

	return (
		<BrowserRouter>
			<LocaleContext.Provider value={LocaleContextValue}>
				<ThemeContext.Provider value={ThemeContextValue}>
					<div className={theme === "dark" ? "dark" : ""}>
						<div className="dark:bg-neutral-900 h-screen">
							<header className="max-w-[1200px] mx-auto px-9 py-6 flex justify-between items-center">
								<Logo />
								<Navbar
									onLogout={onLogout}
									name={authedUser.name}
								/>
							</header>
							<main className="max-w-[1200px] mx-auto">
								<Routes>
									<Route path="/" element={<HomePage />} />
									<Route
										path="/archive"
										element={<ArchivePage />}
									/>
									<Route
										path="/input"
										element={<InputPage />}
									/>
									<Route
										path="/notes/:id"
										element={<DetailPage />}
									/>
									<Route
										path="/*"
										element={<NotFoundPage />}
									/>
								</Routes>
							</main>
						</div>
					</div>
				</ThemeContext.Provider>
			</LocaleContext.Provider>
		</BrowserRouter>
	);
}

export default App;
