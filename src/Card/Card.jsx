import React from "react";
import "./Card.css";
import { imageProvider } from "./ImageProvider";

export default function Card(props) {
	const rarityLookup = {
		1: "blue",
		2: "pink",
		3: "red",
	};
	return (
		<div className={"card " + rarityLookup[props.rarity]}>
			<div
				className="top-margin img"
				style={{
					backgroundImage: `url(${imageProvider(
						props.name,
						props.rarity
					)})`,
				}}
			/>
			<div className="name top-margin">{props.name}</div>
			<div className="spruch">{props.spruch}</div>
		</div>
	);
}
