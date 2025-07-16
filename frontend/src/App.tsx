import "./App.scss"
import { Routes, Route } from "react-router"
import Login from "./pages/login/index"

function App() {
	return (
		<>
			<Routes>
				<Route path="/login" element={<Login />} />
			</Routes>
		</>
	)
}

export default App
