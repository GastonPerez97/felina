import { Route, Routes, NavLink } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Characters from "./components/Characters/Characters";
import Episodes from "./components/Episodes/Episodes";
import Quotes from "./components/Quotes/Quotes";

import "./App.css";

const App = () => {
	return (
		<>
			<Navbar />

			<Routes>
				<Route path="/" element={<Home />}/>
				<Route path="characters" element={<Characters />} />
				<Route path="episodes" element={<Episodes />} />
				<Route path="quotes" element={<Quotes />} />
			</Routes>
		</>
	);
}

export default App;
