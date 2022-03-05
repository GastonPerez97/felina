import { useEffect, useState, useMemo } from "react";
import {
	Heading,
	Stack,
	Skeleton,
	Tag,
	Tabs,
	Tab,
	TabList,
	TabPanels,
	TabPanel,
	Table,
	Thead,
	Tbody,
	Tr,
	Th,
	Td,
} from "@chakra-ui/react";

import { getAllEpisodes } from "../../services/breaking-bad-api";
import { nanoid } from "nanoid";

const Episodes = () => {
	const [episodes, setEpisodes] = useState([]);

	useEffect(() => {
		getAllEpisodes().then(episodes => {
			setEpisodes(episodes);
		});
	}, []);

	const loadingSkeleton = useMemo(() => {
		return (
			<>
				<Skeleton height="41px" />

				<Stack px={3} py={1}>
					<Skeleton height="40px" />

					<Stack p={1}>
						{Array(10)
							.fill(1)
							.map(item => (
								<Skeleton key={nanoid()} h="70px" />
							))}
					</Stack>
				</Stack>
			</>
		);
	}, []);

	const getTableRowElementBySeason = seasonNumber => {
		return episodes
			.filter(episode => episode.season === seasonNumber)
			.map(episode => {
				return (
					<Tr key={nanoid()}>
						<Td w={"10%"}>{episode.episode}</Td>
						<Td w={"20%"}>{episode.title}</Td>
						<Td w={"20%"}>{episode.air_date}</Td>
						<Td w={"50%"}>
							{episode.characters.map(character => (
								<Tag m={1} key={nanoid()}>
									{character}
								</Tag>
							))}
						</Td>
					</Tr>
				);
			});
	};

	const getTableElementBySeason = seasonNumber => {
		return (
			<Table variant="simple">
				<Thead>
					<Tr>
						<Th>#</Th>
						<Th>Title</Th>
						<Th>Air Date</Th>
						<Th>Characters</Th>
					</Tr>
				</Thead>
				<Tbody>{getTableRowElementBySeason(seasonNumber)}</Tbody>
			</Table>
		);
	};

	return (
		<>
			<Heading fontSize="45px" textAlign="center" mb={8}>
				EPISODES
			</Heading>

			{episodes.length === 0 ? (
				<Stack>{loadingSkeleton}</Stack>
			) : (
				<Tabs variant="enclosed" isFitted>
					<TabList>
						<Tab>Season 1 (2008)</Tab>
						<Tab>Season 2 (2009)</Tab>
						<Tab>Season 3 (2010)</Tab>
						<Tab>Season 4 (2011)</Tab>
						<Tab>Season 5 (2012 - 2013)</Tab>
					</TabList>
					<TabPanels>
						<TabPanel>{getTableElementBySeason("1")}</TabPanel>
						<TabPanel>{getTableElementBySeason("2")}</TabPanel>
						<TabPanel>{getTableElementBySeason("3")}</TabPanel>
						<TabPanel>{getTableElementBySeason("4")}</TabPanel>
						<TabPanel>{getTableElementBySeason("5")}</TabPanel>
					</TabPanels>
				</Tabs>
			)}
		</>
	);
};

export default Episodes;
