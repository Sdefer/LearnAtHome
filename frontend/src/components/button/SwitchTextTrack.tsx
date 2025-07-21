import { styled } from "@mui/material/styles"
import Switch, { switchClasses } from "@mui/material/Switch"

interface SwitchTextTrackProps {
	isMobile?: boolean
}

export const SwitchTextTrack = styled((props: SwitchTextTrackProps & any) => {
	const { isMobile, ...rest } = props
	return <Switch {...rest} />
})<SwitchTextTrackProps>(({ isMobile }) => ({
	width: 80,
	height: 48,
	padding: 8,
	overflow: "visible",
	[`& .${switchClasses.switchBase}`]: {
		padding: 11,
		color: isMobile ? "transparent" : "#ff6a00",
	},
	[`& .${switchClasses.thumb}`]: {
		width: 26,
		height: 26,
		backgroundColor: isMobile ? "#db3d54" : "#fff",
	},
	[`& .${switchClasses.track}`]: {
		background: isMobile ? "white" : "linear-gradient(to right, #e37686, #f02240)",
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
			left: isMobile ? -75 : -80,
			color: isMobile ? "white" : "#db3d54",
			fontWeight: "bold",
		},
		"&:after": {
			content: '"Teacher"',
			right: -45,
			color: isMobile ? "white" : "#757575",
		},
	},
	[`& .${switchClasses.checked}`]: {
		[`&.${switchClasses.switchBase}`]: {
			color: "white",
			transform: "translateX(32px)",
			"&:hover": {
				backgroundColor: isMobile ? "transparent" : "rgba(236, 54, 81,0.08)",
			},
		},
		[`& .${switchClasses.thumb}`]: {
			backgroundColor: isMobile ? "#5e114c" : "white",
		},
		[`& + .${switchClasses.track}`]: {
			background: isMobile ? "white!important" : "linear-gradient(45deg, #9e4d8c, #150110)",
			"&:before": {
				color: isMobile ? "white" : "#757575",
				fontWeight: 300,
			},
			"&:after": {
				color: isMobile ? "white" : "purple",
				fontWeight: "bold",
			},
		},
	},
}))
