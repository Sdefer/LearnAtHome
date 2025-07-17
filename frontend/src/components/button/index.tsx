import "./button.scss"

interface ButtonProps {
	children: React.ReactNode
	variant?: "primary" | "secondary"
	onClick?: () => void
}

function Button({ children, variant = "primary", onClick }: ButtonProps) {
	return (
		<button className={`btn ${variant}`} onClick={onClick}>
			{children}
		</button>
	)
}

export default Button
