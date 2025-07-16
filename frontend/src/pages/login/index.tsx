import "./login.scss"

import Button from "../../components/button/index"

import { CiAt } from "react-icons/ci"
import { CiLock } from "react-icons/ci"
import { GoEyeClosed } from "react-icons/go"
import { IconContext } from "react-icons"

import logo_desktop from "../../assets/logo.png"
import logo_mobile from "../../assets/logo_variant.png"

function Login() {
	const isDesktop = () => window.innerWidth > 480

	return (
		<div className="container">
			<div className="login_container">
				<div className="logo">
					<img src={isDesktop() ? logo_desktop : logo_mobile} alt="logo" />
				</div>
				<form className="form">
					<label htmlFor="email">
						<IconContext.Provider value={{ className: "email_icon" }}>
							<CiAt />
						</IconContext.Provider>
						<input id="email" type="text" name="email" placeholder="EMAIL" />
					</label>

					<label htmlFor="password">
						<IconContext.Provider value={{ className: "password_icon" }}>
							<CiLock />
						</IconContext.Provider>
						<input id="password" type="text" name="password" placeholder="PASSWORD" />
						<IconContext.Provider value={{ className: "eye_icon" }}>
							<GoEyeClosed />
						</IconContext.Provider>
					</label>
				</form>
				<div className="login_options">
					<div className="remember">
						<input type="checkbox" />
						<p>Remember me</p>
					</div>
					<div className="forgot">
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
