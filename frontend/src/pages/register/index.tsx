import "./register.scss"

import Button from "../../components/button/index"

import { useNavigate } from "react-router"
import { useState } from "react"
import { Link } from "react-router"
import { useAppDispatch } from "../../hooks/redux-hooks"
import { register } from "../../slices/authSlice"

import { CiAt } from "react-icons/ci"
import { CiLock } from "react-icons/ci"
import { GoEyeClosed, GoEye } from "react-icons/go"
import { PiIdentificationCardThin } from "react-icons/pi"
import { SwitchTextTrack } from "../../components/button/SwitchTextTrack"

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
	const [role, setRole] = useState("student")
	const [termsAccepted, setTermsAccepted] = useState(false)

	const [passwordType, setPasswordType] = useState("password")
	const [confirmPasswordType, setConfirmPasswordType] = useState("password")

	const handlePasswordToggle = () => {
		setPasswordType(passwordType === "password" ? "text" : "password")
	}
	const handleConfirmPasswordToggle = () => {
		setConfirmPasswordType(confirmPasswordType === "password" ? "text" : "password")
	}

	const handleSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setRole(event.target.checked ? "teacher" : "student")
	}

	const handleRegister = async () => {
		if (firstName && lastName && email && password && termsAccepted) {
			try {
				await dispatch(
					register({
						firstName,
						lastName,
						email,
						password,
						role,
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
								placeholder="First name"
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
								placeholder="Last name"
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
							type={passwordType}
							name="password"
							placeholder="Password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						{passwordType === "password" ? (
							<GoEyeClosed className="eye_icon" onClick={handlePasswordToggle} />
						) : (
							<GoEye className="eye_icon" onClick={handlePasswordToggle} />
						)}
					</label>
					<label htmlFor="confirmPassword">
						<CiLock className="password_icon" />
						<input id="confirmPassword" type={confirmPasswordType} name="confirmPassword" placeholder="Confirm password" />
						{confirmPasswordType === "password" ? (
							<GoEyeClosed className="eye_icon" onClick={handleConfirmPasswordToggle} />
						) : (
							<GoEye className="eye_icon" onClick={handleConfirmPasswordToggle} />
						)}
					</label>
					<div className="switch">
						<SwitchTextTrack className="switchBtn" checked={role === "teacher"} onChange={handleSwitchChange} isMobile={!isDesktop()} />
					</div>
					<div className="terms">
						<input
							type="checkbox"
							id="termsAccepted"
							name="termsAccepted"
							checked={termsAccepted}
							onChange={(e) => setTermsAccepted(e.target.checked)}
						/>
						<label htmlFor="termsAccepted">
							I agree to the <span>Terms and conditions</span>
						</label>
					</div>
					<div className="register_actions">
						<Button variant={isDesktop() ? "primary" : "secondary"} onClick={handleRegister}>
							Create Account
						</Button>
					</div>
				</form>
				<div className="login_redirect" onClick={() => navigate("/login")}>
					<p>Already have an account?</p>
				</div>
			</div>
		</div>
	)
}

export default Register
