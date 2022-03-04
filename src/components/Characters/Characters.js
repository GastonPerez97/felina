import { useEffect, useState } from "react";
import { Heading } from "@chakra-ui/react";

import CharacterCard from "./CharacterCard";
import { getAllCharacters } from "../../services/breaking-bad-api";

import "./Characters.css";

const Characters = () => {
	const [characters, setCharacters] = useState([]);

	useEffect(() => {
		getAllCharacters().then(characters => {
			setCharacters(characters);
		});
	}, []);

	const characterElements = characters.map(character => {
		return <CharacterCard key={character.char_id} {...character} />;
	});

	return (
		<>
			<Heading>Characters</Heading>
			{characterElements}
		</>
	);
};

export default Characters;
