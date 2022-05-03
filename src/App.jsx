import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";
import ActivePlayers from "./ActivePlayers/ActivePlayers";
import "./App.css";
import Buttons from "./Buttons/Buttons";
import CardList from "./CardList/CardList";
import PlayerToggle from "./PlayerToggle/PlayerToggle";

function App() {
	const BACKEND_ENDPOINT = "localhost:3001";

	const [socket, setSocket] = useState(null);
	const [allPlayers, setAllPlayers] = useState([]);
	const [activePlayers, setActivePlayers] = useState([]);
	const [configuration, setConfiguraton] = useState([]);

	useEffect(() => {
		const socket = io(BACKEND_ENDPOINT);

		socket.on("all-players", (data) => {
			setAllPlayers(data);
			console.log("All Players = " + allPlayers.toString());
		});

		socket.on("active-players", (data) => {
			setActivePlayers(data);
			console.log("Active Players = " + activePlayers.toString());
		});

		socket.on("configuration", (data) => {
			setConfiguraton(data);
		});

		setSocket(socket);
		return () => socket.close();
	}, [setSocket]);

	function togglePlayerActive(playerName) {
		socket.emit("update-player", playerName);
	}

	function reset() {
		socket.emit("reset");
	}

	return (
		<div>
			<div
				style={{
					paddingTop: "50px",
				}}>
				<h1
					style={{
						textAlign: "center",
						fontSize: "4em",
						color: "whitesmoke",
					}}>
					Der große Faceit Team Finder
				</h1>
				<p
					style={{
						textAlign: "center",
						color: "whitesmoke",
						marginTop: "50px",
						fontSize: "1.2em",
					}}>
					Wähle den Topf an herausragenden Spielern, aus dem gezogen
					wird:
				</p>
			</div>

			{/* ACTIVE PLAYERS TOGGLES */}
			<ActivePlayers
				allPlayers={allPlayers}
				activePlayers={activePlayers}
				togglePlayerActive={togglePlayerActive}
			/>

			{/* CARDLIST */}
			<CardList configuration={configuration} />

			<Buttons resetFunction={reset} />
		</div>
	);
}

export default App;
