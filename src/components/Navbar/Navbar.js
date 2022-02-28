import { NavLink } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
	return (
		<nav className="navbar">
			<img className="navbar-logo" src="./img/logo.jpg" alt="FeLiNa logo" />

			<div className="nav-btn-container">
				<NavLink to="/">Home</NavLink>
				<NavLink to="characters">Characters</NavLink>
				<NavLink to="episodes">Episodes</NavLink>
				<NavLink to="quotes">Quotes</NavLink>
			</div>
		</nav>
	);
}

export default Navbar;