import "./register.scss"

import Button from "../../components/button/index"

import { useNavigate } from "react-router"
import { useState } from "react"
import { useAppDispatch } from "../../hooks/redux-hooks"
import { register } from "../../slices/authSlice"

import { CiAt } from "react-icons/ci"
import { CiLock } from "react-icons/ci"
import { GoEyeClosed } from "react-icons/go"
import { PiIdentificationCardThin } from "react-icons/pi"
import Switch from "@mui/material/Switch"

import logo_desktop from "../../assets/logo.png"
import logo_mobile from "../../assets/logo_variant.png"

function Register() {
	const isDesktop = () => window.innerWidth > 480

	const navigate = useNavigate()
	const dispatch = useAppDispatch()

	const [firstName, setFirstName] = useState("")
	const [lastName, setLastName] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const handleRegister = async () => {
		if (firstName && lastName && email && password) {
			try {
				await dispatch(
					register({
						firstName,
						lastName,
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
			<div className="register_container">
				<div className="logo">
					<img src={isDesktop() ? logo_desktop : logo_mobile} alt="logo" />
				</div>

				<form className="form">
					<div className="fullName">
						<label htmlFor="firstName">
							<PiIdentificationCardThin className="name_icon" />
							<input
								id="firstName"
								type="text"
								name="firstName"
								placeholder="Firstname"
								value={firstName}
								onChange={(e) => setFirstName(e.target.value)}
							/>
						</label>
						<label htmlFor="lastName">
							<PiIdentificationCardThin className="name_icon" />
							<input
								id="lastName"
								type="text"
								name="lastName"
								placeholder="lastName"
								value={lastName}
								onChange={(e) => setLastName(e.target.value)}
							/>
						</label>
					</div>
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
					<label htmlFor="confirmPassword">
						<CiLock className="password_icon" />
						<input id="confirmPassword" type="password" name="confirmPassword" placeholder="Confirm Password" />
						<GoEyeClosed className="eye_icon" />
					</label>
				</form>

				<Switch defaultChecked />
				<div className="terms">
					<input type="checkbox" />
					<p>
						I agree to the <span>Terms and conditions</span>
					</p>
				</div>
				<div className="register_actions">
					<Button variant={isDesktop() ? "primary" : "secondary"} onClick={handleRegister}>
						Create Account
					</Button>
				</div>
				<div className="forgot" onClick={() => navigate("/login")}>
					<p>Already have an account ?</p>
				</div>
			</div>
		</div>
	)
}

export default Register
