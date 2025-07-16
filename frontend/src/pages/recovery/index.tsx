import { useNavigate } from "react-router"

import Button from "../../components/button/index"

import "./recovery.scss"

import { CiAt } from "react-icons/ci"
import logo_desktop from "../../assets/logo.png"
import logo_mobile from "../../assets/logo_variant.png"

function Recovery() {
	const isDesktop = () => window.innerWidth > 480
	const navigate = useNavigate()

	return (
		<div className="container">
			<div className="recovery_container">
				<div className="logo">
					<img src={isDesktop() ? logo_desktop : logo_mobile} alt="logo" />
				</div>
				<div className="recovery_info">
					<h2>Reset Password</h2>
					<p>
						Please enter the email address associated with your account. We will then send you a link, follow the instructions to create a
						new password.
					</p>
				</div>
				<form className="form">
					<label htmlFor="email">
						<CiAt className="email_icon" />
						<input id="email" type="text" name="email" placeholder="E-mail" />
					</label>
				</form>

				<div className="recovery_actions">
					<Button variant={isDesktop() ? "primary" : "secondary"}>Send</Button>
					<p className="back_btn" onClick={() => navigate("/login")}>
						Back to login
					</p>
				</div>
			</div>
		</div>
	)
}

export default Recovery
