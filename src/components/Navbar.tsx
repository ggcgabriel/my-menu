import React from "react";
import { Link } from "react-router-dom";

import styles from "../components/Navbar.module.css";

export default function Navbar() {
	return (
		<nav className={styles.navbar}>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/cardapio">Cardapio</Link>
				</li>
			</ul>
		</nav>
	);
}
