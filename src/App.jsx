import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";
import ActivePlayers from "./ActivePlayers/ActivePlayers";
import "./App.css";
import Buttons from "./Buttons/Buttons";
import CardList from "./CardList/CardList";
import Header from "./Header/Header";
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

		socket.on("roll", (data) => {
			animateRoll(data);
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

	function emitRoll() {
		socket.emit("emit-roll");
	}

	function animateRoll(val) {
		$(".card").first().animate(
			{
				marginLeft: 0,
			},
			{
				duration: 0,
			}
		);
		$(".card").first().animate(
			{
				marginLeft: -val,
			},
			{
				duration: 4150,
			}
		);
	}

	return (
		<div>
			<Header />

			{/* ACTIVE PLAYERS TOGGLES */}
			<ActivePlayers
				allPlayers={allPlayers}
				activePlayers={activePlayers}
				togglePlayerActive={togglePlayerActive}
			/>

			{/* CARDLIST */}
			<CardList configuration={configuration} />

			{/* ACTION BUTTONS */}
			<Buttons resetFunction={reset} rollFunction={emitRoll} />
		</div>
	);
}

export default App;
