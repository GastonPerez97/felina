import { useEffect, useState, useMemo } from "react";
import {
	Heading,
	Skeleton,
	Stack,
	Text,
	Box,
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionIcon,
	AccordionPanel,
	UnorderedList,
	ListItem,
} from "@chakra-ui/react";

import { getAllQuotes } from "../../services/breaking-bad-api";
import { nanoid } from "nanoid";

const Quotes = () => {
	const [quotes, setQuotes] = useState([]);

	useEffect(() => {
		getAllQuotes().then(quotes => {
			setQuotes(quotes);
		});
	}, []);

	const loadingSkeleton = useMemo(() => {
		return Array(8)
			.fill(1)
			.map(item => <Skeleton key={nanoid()} h="35px" />);
	}, []);

	const getAccordionItemByCharacter = characterName => {
		return (
			<AccordionItem key={nanoid()}>
				<h2>
					<AccordionButton>
						<Box flex="1" textAlign="left">
							{characterName}
						</Box>
						<AccordionIcon />
					</AccordionButton>
				</h2>
				<AccordionPanel pb={4}>
					<UnorderedList>
						{quotes
							.filter(quote => quote.author === characterName)
							.map(quote => (
								<ListItem key={nanoid()} my={3}>
									<Text as="cite">"{quote.quote}"</Text>
								</ListItem>
							))}
					</UnorderedList>
				</AccordionPanel>
			</AccordionItem>
		);
	};

	return (
		<>
			<Heading fontSize="45px" textAlign="center" mb={8}>
				QUOTES
			</Heading>

			{quotes.length === 0 ? (
				<Stack mx="auto" w="75%">
					{loadingSkeleton}
				</Stack>
			) : (
				<Accordion allowToggle w={"75%"} mx="auto">
					{getAccordionItemByCharacter("Walter White")}
					{getAccordionItemByCharacter("Jesse Pinkman")}
					{getAccordionItemByCharacter("Hank Schrader")}
					{getAccordionItemByCharacter("Skyler White")}
					{getAccordionItemByCharacter("Saul Goodman")}
					{getAccordionItemByCharacter("Mike Ehrmantraut")}
					{getAccordionItemByCharacter("Gus Fring")}
					{getAccordionItemByCharacter("Hector Salamanca")}
				</Accordion>
			)}
		</>
	);
};

export default Quotes;
