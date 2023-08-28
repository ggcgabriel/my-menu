import React from "react";
import Image from "next/image";

import styles from "./Card.module.css";

interface CardProps {
	title: string;
	description: string;
	price: string;
	imageSrc: string;
}

export default function Card({
	title,
	description,
	price,
	imageSrc,
}: CardProps) {
	return (
		<div className={styles.card}>
			<Image
				className={styles.card_image}
				src={imageSrc}
				alt={title}
				width={200}
				height={200}
			/>
			<h3 className={styles.card_title}>{title}</h3>
			<p className={styles.card_description}>{description}</p>
			<p className={styles.card_price}>Preço: {price}</p>
		</div>
	);
}
