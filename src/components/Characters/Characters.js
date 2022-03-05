import { useEffect, useState, useMemo } from "react";
import {
	Heading,
	Wrap,
	WrapItem,
	Skeleton,
	Input,
	Flex,
} from "@chakra-ui/react";

import CharacterCard from "./CharacterCard";
import { getAllCharacters } from "../../services/breaking-bad-api";

const Characters = () => {
	const [characters, setCharacters] = useState([]);
	const [inputData, setInputData] = useState("");

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

	const characterElements = useMemo(() => {
		return characters
			.filter(
				character =>
					character.name
						.toLowerCase()
						.includes(inputData.toLowerCase()) ||
					character.nickname
						.toLowerCase()
						.includes(inputData.toLowerCase())
			)
			.map(character => {
				return <CharacterCard key={character.char_id} {...character} />;
			});
	}, [characters, inputData]);

	const handleInput = event => setInputData(event.target.value);
	return (
		<>
			<Flex direction="column" align="center" rowGap={5} mb={8}>
				<Heading fontSize="45px" textAlign="center">
					CHARACTERS
				</Heading>

				<Input
					placeholder="Enter character's name..."
					w={"80"}
					onChange={handleInput}
					value={inputData}
				/>
			</Flex>

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
