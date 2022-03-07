import { NavLink } from "react-router-dom";
import { ButtonGroup, Button, Image } from "@chakra-ui/react";

import logo from "../../assets/img/logo.jpg";

import "./Navbar.css";

const Navbar = () => {
	return (
		<nav className="navbar-container">
			<Image className="navbar-logo" src={logo} alt="FeLiNa logo" />

			<ButtonGroup
				mt="8"
				variant="outline"
				isAttached
				flexDirection={{ base: "column", sm: "row" }}
			>
				<Button
					fontWeight="normal"
					p="0"
					me={[0, 10]}
					mb={[4, 0]}
					mx="auto"
					w="80px"
					variant="outline"
				>
					<NavLink to="/">Home</NavLink>
				</Button>

				<ButtonGroup variant="outline" isAttached>
					<Button fontWeight="normal" p="0">
						<NavLink to="characters">Characters</NavLink>
					</Button>

					<Button fontWeight="normal" p="0">
						<NavLink to="episodes">Episodes</NavLink>
					</Button>

					<Button fontWeight="normal" p="0">
						<NavLink to="quotes">Quotes</NavLink>
					</Button>
				</ButtonGroup>
			</ButtonGroup>
		</nav>
	);
};

export default Navbar;
