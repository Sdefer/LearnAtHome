import { styled } from "@mui/material/styles"
import Switch, { switchClasses } from "@mui/material/Switch"

export const SwitchTextTrack = styled(Switch)({
	width: 80,
	height: 48,
	overflow: "visible",
	padding: 8,
	[`& .${switchClasses.switchBase}`]: {
		padding: 11,
		color: "#ff6a00",
	},
	[`& .${switchClasses.thumb}`]: {
		width: 26,
		height: 26,
		backgroundColor: "#fff",
	},
	[`& .${switchClasses.track}`]: {
		background: "linear-gradient(to right, #e37686, #f02240)",
		opacity: "1 !important",
		borderRadius: 20,
		position: "relative",
		"&:before, &:after": {
			display: "inline-block",
			position: "absolute",
			top: "50%",
			width: "50%",
			transform: "translateY(-50%)",
			textAlign: "center",
			fontSize: "1em",
			fontWeight: 300,
		},
		"&:before": {
			content: '"Student"',
			left: -80,
			color: "#db3d54",
			fontWeight: "bold",
		},
		"&:after": {
			content: '"Teacher"',
			right: -45,
			color: "#757575",
		},
	},
	[`& .${switchClasses.checked}`]: {
		[`&.${switchClasses.switchBase}`]: {
			color: "#185a9d",
			transform: "translateX(32px)",
			"&:hover": {
				backgroundColor: "rgba(236, 54, 81,0.08)",
			},
		},
		[`& .${switchClasses.thumb}`]: {
			backgroundColor: "#fff",
		},
		[`& + .${switchClasses.track}`]: {
			background: "linear-gradient(45deg, #9e4d8c, #150110)",
			"&:before": {
				color: "#757575",
				fontWeight: 300,
			},
			"&:after": {
				color: "purple",
				fontWeight: "bold",
			},
		},
	},
})
