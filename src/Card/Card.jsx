import React from "react";
import "./Card.css";
import image from "../Images/mendel.jpg";

export default function Card(props) {
	return (
		<div className="card">
			<div
				className="top-margin"
				style={{
					backgroundImage: `url(${image})`,
					width: "120px",
					height: "120px",
					backgroundSize: "cover",
				}}
			/>
			<div className="name top-margin">{props.name}</div>
			<div className="spruch">{props.spruch}</div>
		</div>
	);
}
