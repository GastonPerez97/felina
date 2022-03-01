import { NavLink } from "react-router-dom";
import { ButtonGroup, Button } from "@chakra-ui/react";

import logo from "../../assets/img/logo.jpg";

import "./Navbar.css";

const Navbar = () => {
	return (
		<nav className="navbar-container">
			<img className="navbar-logo" src={ logo } alt="FeLiNa logo" />

			<ButtonGroup variant="outline" isAttached>
				<Button fontWeight="light" p={0} me={2} variant="outline">
					<NavLink to="/">Home</NavLink>
				</Button>

				<ButtonGroup variant="outline" isAttached>
					<Button fontWeight="light" p={0}>
						<NavLink to="characters">Characters</NavLink>
					</Button>

					<Button fontWeight="light" p={0}>
						<NavLink to="episodes">Episodes</NavLink>
					</Button>
					
					<Button fontWeight="light" p={0}>
						<NavLink to="quotes">Quotes</NavLink>
					</Button>
				</ButtonGroup>
			</ButtonGroup>
		</nav>
	);
}

export default Navbar;
