import "./login.scss"

import Button from "../../components/button/index"
import { useNavigate } from "react-router"

import { CiAt } from "react-icons/ci"
import { CiLock } from "react-icons/ci"
import { GoEyeClosed } from "react-icons/go"

import logo_desktop from "../../assets/logo.png"
import logo_mobile from "../../assets/logo_variant.png"

function Login() {
	const isDesktop = () => window.innerWidth > 480
	const navigate = useNavigate()

	return (
		<div className="container">
			<div className="login_container">
				<div className="logo">
					<img src={isDesktop() ? logo_desktop : logo_mobile} alt="logo" />
				</div>
				<form className="form">
					<label htmlFor="email">
						<CiAt className="email_icon" />
						<input id="email" type="text" name="email" placeholder="E-mail" />
					</label>

					<label htmlFor="password">
						<CiLock className="password_icon" />
						<input id="password" type="text" name="password" placeholder="Password" />
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
					<Button variant={isDesktop() ? "primary" : "secondary"}>Login</Button>
					<p className="signUp_btn">Sign Up</p>
				</div>
			</div>
		</div>
	)
}

export default Login
