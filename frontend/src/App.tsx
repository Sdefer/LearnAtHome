import "./App.scss"
import { Routes, Route } from "react-router"
import Login from "./pages/login/index"
import Recovery from "./pages/recovery/index"
import ResetPassword from "./pages/resetPassword/index"

function App() {
	return (
		<>
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/recovery" element={<Recovery />} />
				<Route path="/reset-password" element={<ResetPassword />} />
			</Routes>
		</>
	)
}

export default App
