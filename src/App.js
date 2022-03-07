import { Route, Routes } from "react-router-dom";
import { ChakraProvider, Container } from "@chakra-ui/react";

import theme from "./theme/appTheme";
import "./theme/appTheme.css";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Characters from "./components/Characters/Characters";
import Episodes from "./components/Episodes/Episodes";
import Quotes from "./components/Quotes/Quotes";
import NotFound from "./components/NotFound/NotFound";

import "./App.css";

const App = () => {
	return (
		<ChakraProvider theme={theme}>
			<header>
				<Navbar />
			</header>

			<main>
				<Container maxW="container.xl">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="characters" element={<Characters />} />
						<Route path="episodes" element={<Episodes />} />
						<Route path="quotes" element={<Quotes />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</Container>
			</main>
		</ChakraProvider>
	);
};

export default App;
