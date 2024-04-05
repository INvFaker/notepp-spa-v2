import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useInput from "../hooks/useInput";
import { register } from "../utils/api";
import { LocaleContext } from "../context/Context";

function RegisterPage() {
	const [name, handleNameInput] = useInput("");
	const [email, handleEmailInput] = useInput("");
	const [password, handlePasswordInput] = useInput("");
	const { locale } = React.useContext(LocaleContext);
	const [confirmPassword, handleConfirmPasswordInput] = useInput("");

	const navigate = useNavigate();

	const handleSubmitForm = async (e) => {
		e.preventDefault();

		if (password !== confirmPassword) {
			return alert("Password and password confirm must be same.");
		}

		const { error } = await register({ name, email, password });

		if (!error) {
			navigate("/");
		}
	};

	return (
		<section className="px-9">
			<h2 className="text-2xl dark:text-white">
				Silakan daftarkan akun ...
			</h2>
			<form
				action=""
				className="flex flex-col"
				onSubmit={handleSubmitForm}
			>
				<input
					type="text"
					placeholder="Name"
					className="p-4 my-2 text-2xl border-2 border-black rounded-lg"
					value={name}
					onChange={handleNameInput}
				/>
				<input
					type="email"
					placeholder="Email"
					className="p-4 my-2 text-2xl border-2 border-black rounded-lg"
					value={email}
					onChange={handleEmailInput}
				/>
				<input
					type="password"
					placeholder="Password"
					className="p-4 my-2 text-2xl border-2 border-black rounded-lg"
					value={password}
					onChange={handlePasswordInput}
				/>
				<input
					type="password"
					placeholder="Confirm Password"
					className="p-4 my-2 text-2xl border-2 border-black rounded-lg"
					value={confirmPassword}
					onChange={handleConfirmPasswordInput}
				/>
				<button className="bg-sky-500 p-4 my-2 text-2xl border-2 border-black rounded-lg">
					{locale === "EN" ? "Register" : "Daftar"}
				</button>
			</form>
			<p className="dark:text-white">
				{locale === "EN" ? "Return to" : "Kembali ke"}
				<Link to="/" className="underline">
					{locale === "EN" ? "Login" : "Masuk"}
				</Link>
			</p>
		</section>
	);
}

export default RegisterPage;
