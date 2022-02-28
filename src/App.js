import Navbar from "./components/Navbar/Navbar";

import "./App.css";

function App() {
	return (
		<>
			<Navbar />
			<div className="btn-container">
				<button>Characters</button>
				<button>Episodes</button>
				<button>Quotes</button>
			</div>
		</>
	);
}

export default App;
