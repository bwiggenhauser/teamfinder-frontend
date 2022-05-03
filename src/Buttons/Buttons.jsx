import React from "react";
import "./Buttons.css";

export default function Buttons(props) {
	return (
		<div className="center-div buttons-wrapper">
			<button className="reset button" onClick={props.resetFunction}>
				Reset
			</button>
			<button className="roll button" onClick={props.rollFunction}>
				Spieler ziehen
			</button>
		</div>
	);
}
