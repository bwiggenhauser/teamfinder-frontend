import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";
import ActivePlayers from "./ActivePlayers/ActivePlayers";
import "./App.css";
import Buttons from "./Buttons/Buttons";
import CardList from "./CardList/CardList";
import Header from "./Header/Header";
import CaseSound from "./Sounds/csgo_case_sound.mp3";
import ClickSound from "./Sounds/click.mp3";

function App() {
	// const BACKEND_ENDPOINT = "localhost:3001";
	const BACKEND_ENDPOINT = "https://teamfinderserver.bwiggenhauser.de";

	const [socket, setSocket] = useState(null);
	const [allPlayers, setAllPlayers] = useState([]);
	const [allPlayersTemp, setAllPlayersTemp] = useState([]);
	const [activePlayers, setActivePlayers] = useState([]);
	const [configuration, setConfiguraton] = useState([]);

	useEffect(() => {
		const socket = io(BACKEND_ENDPOINT);

		socket.on("all-players", (data) => {
			setAllPlayers(data);
		});

		socket.on("all-players-temp", (data) => {
			setAllPlayersTemp(data);
		});

		socket.on("active-players", (data) => {
			playSound(ClickSound, 0.2);
			setActivePlayers(data);
		});

		socket.on("configuration", (data) => {
			setConfiguraton(data);
		});

		socket.on("roll", (data) => {
			playSound(CaseSound, 0.33);
			animateRoll(data);
		});

		setSocket(socket);
		return () => socket.close();
	}, [setSocket]);

	function togglePlayerActive(playerName) {
		socket.emit("update-player", playerName);
	}

	function addPlayer(player) {
		socket.emit("update-player", player);
	}

	function playSound(soundLink, volume) {
		let sound = new Audio(soundLink);
		sound.volume = volume;
		sound.play();
	}

	function reset() {
		socket.emit("reset");
		$(".card").first().animate(
			{
				marginLeft: 0,
			},
			{
				duration: 0,
			}
		);
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
				allPlayers={allPlayersTemp}
				activePlayers={activePlayers}
				togglePlayerActive={togglePlayerActive}
				addPlayerFunction={addPlayer}
			/>

			{/* CARDLIST */}
			<CardList configuration={configuration} />

			{/* ACTION BUTTONS */}
			<Buttons resetFunction={reset} rollFunction={emitRoll} />
		</div>
	);
}

export default App;
