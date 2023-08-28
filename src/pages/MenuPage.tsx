import React from "react";

import Card from "../components/Card";
import styles from "./MenuPage.module.css";

export default function MenuPage() {
	const menuItems = [
		{
			title: "Risoto de camarão",
			description: "Delicioso risoto feito com camarão",
			price: "R$ 35,00",
			imageSrc: "/images/risoto-camarao.jpg",
		},
		{
			title: "Lasanha a Bolonhesa",
			description: "Massa para lasanha, carne moída e molho branco",
			price: "R$ 47,90",
			imageSrc: "/images/lasanha.jpg",
		},
		{
			title: "Filé mignon com molho mostarda",
			description: "Filé mignon, molho de mostarda cremoso, salsinha",
			price: "R$ 56,00",
			imageSrc: "/images/file-mignon.jpg",
		},
	];

	return (
		<div className={styles.menu_page}>
			{menuItems.map((menuItem, index) => (
				<Card
					key={index}
					title={menuItem.title}
					description={menuItem.description}
					price={menuItem.price}
					imageSrc={menuItem.imageSrc}
				/>
			))}
		</div>
	);
}
