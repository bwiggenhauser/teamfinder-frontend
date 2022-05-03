import React from "react";
import "./Header.css";

export default function Header() {
	return (
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
				Wähle den Topf an herausragenden Spielern, aus dem gezogen wird:
			</p>
		</div>
	);
}
