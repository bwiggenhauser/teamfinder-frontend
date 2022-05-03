import React from "react";
import "./PlayerToggle.css";

export default function PlayerToggle(props) {
	function playerToggle() {
		props.togglePlayer(props.name);
	}
	return (
		<div className={"personCheckbox" + ` ${props.activeStatus}`}>
			<input
				type="checkbox"
				id={props.name}
				name="mycheckboxes"
				className="input_player"
				onChange={playerToggle}
			/>
			<div>
				<label className="playerLabel" htmlFor={props.name}>
					{props.name}
				</label>
			</div>
		</div>
	);
}
