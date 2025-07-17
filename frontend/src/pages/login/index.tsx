import "./login.scss"

import Button from "../../components/button/index"

import { useNavigate } from "react-router"
import { useState } from "react"
import { useAppDispatch } from "../../hooks/redux-hooks"
import { login } from "../../slices/authSlice"

import { CiAt } from "react-icons/ci"
import { CiLock } from "react-icons/ci"
import { GoEyeClosed } from "react-icons/go"

import logo_desktop from "../../assets/logo.png"
import logo_mobile from "../../assets/logo_variant.png"

function Login() {
	const isDesktop = () => window.innerWidth > 480

	const navigate = useNavigate()
	const dispatch = useAppDispatch()

	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const handleLogin = async () => {
		if (email && password) {
			try {
				await dispatch(
					login({
						email,
						password,
					})
				).unwrap()
			} catch (e) {
				console.error(e)
			}
		} else {
			// Show an error message.
		}
	}

	return (
		<div className="container">
			<div className="login_container">
				<div className="logo">
					<img src={isDesktop() ? logo_desktop : logo_mobile} alt="logo" />
				</div>
				<form className="form">
					<label htmlFor="email">
						<CiAt className="email_icon" />
						<input id="email" type="text" name="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
					</label>

					<label htmlFor="password">
						<CiLock className="password_icon" />
						<input
							id="password"
							type="password"
							name="password"
							placeholder="Password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						<GoEyeClosed className="eye_icon" />
					</label>
				</form>
				<div className="login_options">
					<div className="remember">
						<input type="checkbox" />
						<p>Remember me</p>
					</div>
					<div className="forgot" onClick={() => navigate("/recovery")}>
						<p>Forgot password ?</p>
					</div>
				</div>
				<div className="login_actions">
					<Button variant={isDesktop() ? "primary" : "secondary"} onClick={handleLogin}>
						Login
					</Button>
					<p className="signUp_btn" onClick={() => navigate("/register")}>
						Sign Up
					</p>
				</div>
			</div>
		</div>
	)
}

export default Login
