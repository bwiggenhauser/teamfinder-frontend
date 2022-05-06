import React from "react";
import PlayerToggle from "../PlayerToggle/PlayerToggle";
import "./ActivePlayers.css";

export default function ActivePlayers(props) {
	function getActiveStatus(playerName) {
		if (props.activePlayers.includes(playerName)) {
			return true;
		} else {
			return false;
		}
	}

	function playerAdd() {
		const value = document.getElementById("add-player-input").value;
		document.getElementById("add-player-input").value = "";
		props.addPlayerFunction(value);
	}

	return (
		<div className="center-div">
			<div className="active-players-wrapper">
				{props.allPlayers.map((player) => (
					<PlayerToggle
						key={"toggle " + player}
						name={player}
						activeStatus={getActiveStatus(player)}
						togglePlayer={props.togglePlayerActive}
					/>
				))}
				<div className="add-player-wrapper">
					<input type="text" id="add-player-input" />
					<button id="add-player-button" onClick={playerAdd}>
						+
					</button>
				</div>
			</div>
		</div>
	);
}
