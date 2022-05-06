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
	return (
		<div className="center-div">
			<div className="active-players-wrapper">
				{props.allPlayers.map((player) => (
					<PlayerToggle
						name={player}
						activeStatus={getActiveStatus(player)}
						togglePlayer={props.togglePlayerActive}
						key={"toggle-" + player}
					/>
				))}
				<div className="add-player-wrapper">
					<input type="text" id="add-player-input" />
					<button id="add-player-button">+</button>
				</div>
			</div>
		</div>
	);
}
