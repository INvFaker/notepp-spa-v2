import React from "react";
import { Link } from "react-router-dom";
import useInput from "../hooks/useInput";
import { login } from "../utils/api";
import PropTypes from "prop-types";
import { LocaleContext } from "../context/Context";

function LoginPage({ loginSuccess }) {
	const [email, handleNameInput] = useInput("");
	const [password, handlePasswordInput] = useInput("");
	const { locale } = React.useContext(LocaleContext);

	const handleSubmitForm = async (e) => {
		e.preventDefault();
		const { error, data } = await login({ email, password });
		if (!error) {
			loginSuccess(data);
		}
		// onLogin();
	};

	// const onLogin = async () => {
	// 	const { error, data } = await login({ email, password });

	// 	if (!error) {
	// 		loginSuccess(data);
	// 	}
	// };

	return (
		<section className="px-9">
			<h2 className="text-2xl dark:text-white">
				{locale === "EN"
					? "Please log in to continue"
					: "Silakan masuk untuk melanjutkan ..."}
			</h2>
			<form
				action=""
				className="flex flex-col"
				onSubmit={handleSubmitForm}
			>
				<input
					type="email"
					placeholder="Email"
					className="p-4 my-2 text-2xl border-2 border-black rounded-lg"
					value={email}
					onChange={handleNameInput}
				/>
				<input
					type="password"
					placeholder="Password"
					className="p-4 my-2 text-2xl border-2 border-black rounded-lg"
					value={password}
					onChange={handlePasswordInput}
				/>
				<button className="bg-sky-500 p-4 my-2 text-2xl border-2 border-black rounded-lg">
					{locale === "EN" ? "Login" : "Masuk"}
				</button>
			</form>
			<p className="dark:text-white">
				{locale === "EN"
					? "Don't have an account yet?"
					: "Belum punya akun?"}
				<Link to="/register" className="underline">
					{locale === "EN" ? " Register here." : " Daftar di sini."}
				</Link>
			</p>
		</section>
	);
}

LoginPage.propTypes = {
	loginSuccess: PropTypes.func.isRequired,
};

export default LoginPage;
