import React from "react";
import "./Buttons.css";

export default function Buttons(props) {
	return (
		<div className="center-div">
			<button className="reset button" onClick={props.resetFunction}>Reset</button>
			<button className="roll button">Spieler ziehen</button>
		</div>
	);
}
