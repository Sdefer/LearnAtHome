import "./App.scss"
import { Routes, Route } from "react-router"
import Login from "./pages/login/index"
import Recovery from "./pages/recovery/index"
import ResetPassword from "./pages/resetPassword/index"
import Register from "./pages/register/index"

function App() {
	return (
		<>
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/recovery" element={<Recovery />} />
				<Route path="/reset-password" element={<ResetPassword />} />
				<Route path="/register" element={<Register />} />
			</Routes>
		</>
	)
}

export default App
