import React from "react";
import Card from "../Card/Card";
import "./CardList.css";

export default function CardList(props) {
	console.log(props.configuration);
	return (
		<div className="center-div">
			<div className="cardlist">
				{props.configuration.map((card) => (
					<Card name={card.name} spruch={card.sentence} />
				))}
			</div>
		</div>
	);
}
