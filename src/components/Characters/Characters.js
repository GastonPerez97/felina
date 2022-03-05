import { useEffect, useState, useMemo } from "react";
import { Heading, Wrap, WrapItem, Skeleton } from "@chakra-ui/react";

import CharacterCard from "./CharacterCard";
import { getAllCharacters } from "../../services/breaking-bad-api";

const Characters = () => {
	const [characters, setCharacters] = useState([]);

	useEffect(() => {
		getAllCharacters().then(characters => {
			setCharacters(characters);
		});
	}, []);

	const loadingSkeleton = useMemo(() => {
		return Array(15)
			.fill(1)
			.map((item, index) => (
				<WrapItem key={index}>
					<Skeleton
						w={{ base: "100px", sm: "200px" }}
						h={{ base: "180px", sm: "300px" }}
						borderRadius="20px"
					/>
				</WrapItem>
			));
	}, []);

	const characterElements = characters.map(character => {
		return <CharacterCard key={character.char_id} {...character} />;
	});

	return (
		<>
			<Heading fontSize="45px" mb={10} textAlign="center">
				CHARACTERS
			</Heading>

			{characters.length === 0 ? (
				<Wrap spacing="30px" justify="center">
					{loadingSkeleton}
				</Wrap>
			) : (
				<Wrap spacing="30px" justify="center">
					{characterElements}
				</Wrap>
			)}
		</>
	);
};

export default Characters;
