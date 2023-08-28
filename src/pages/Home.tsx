import React from "react";
import Image from "next/image";

import styles from "./Home.module.css";

interface CardProps {
	imageSrc: string;
}

export default function Home({ imageSrc }: CardProps) {
	return (
		<div className={styles.homePage}>
			<Image
				className={styles.homeImage}
				src={imageSrc}
				alt="Imagem de apresentacao"
				width={400}
				height={500}
			/>
			<h1>Bem vindo ao projeto do Gabriel e Ronald</h1>
		</div>
	);
}
