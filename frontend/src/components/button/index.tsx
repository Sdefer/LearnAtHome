import "./button.scss"

interface ButtonProps {
	children: React.ReactNode
	variant?: "primary" | "secondary"
}

function Button({ children, variant = "primary" }: ButtonProps) {
	return <button className={`btn ${variant}`}>{children}</button>
}

export default Button
