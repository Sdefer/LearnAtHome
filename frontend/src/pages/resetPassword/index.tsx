import "./resetPassword.scss"

import Button from "../../components/button/index"
import { CiLock } from "react-icons/ci"
import { IconContext } from "react-icons"
import logo_desktop from "../../assets/logo.png"
import logo_mobile from "../../assets/logo_variant.png"
import { useNavigate } from "react-router"

function ResetPassword() {
	const isDesktop = () => window.innerWidth > 480
	const navigate = useNavigate()

	return (
		<div className="container">
			<div className="resetPassword_container">
				<div className="logo">
					<img src={isDesktop() ? logo_desktop : logo_mobile} alt="logo" />
				</div>
				<div className="resetPassword_info">
					<h2>New Password</h2>
					<p>Enter your new password below. Make sure it is strong and unique.</p>
				</div>
				<form className="form">
					<label htmlFor="password">
						<IconContext.Provider value={{ className: "password_icon" }}>
							<CiLock />
						</IconContext.Provider>
						<input id="password" type="password" name="password" placeholder="New password" />
					</label>
					<label htmlFor="confirm">
						<IconContext.Provider value={{ className: "password_icon" }}>
							<CiLock />
						</IconContext.Provider>
						<input id="confirm" type="password" name="confirm" placeholder="Confirm password" />
					</label>
				</form>
				<div className="resetPassword_actions">
					<Button variant={isDesktop() ? "primary" : "secondary"}>Save</Button>
					<p className="back_btn" onClick={() => navigate("/login")}>
						Back to login
					</p>
				</div>
			</div>
		</div>
	)
}

export default ResetPassword
