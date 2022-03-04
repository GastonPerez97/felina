import { Heading, Text, Stack, Box, Wrap } from "@chakra-ui/react";

import SeasonCard from "./SeasonCard";
import season1 from "../../assets/img/season1.jpg";
import season2 from "../../assets/img/season2.jpg";
import season3 from "../../assets/img/season3.jpg";
import season4 from "../../assets/img/season4.jpg";
import season5 from "../../assets/img/season5.jpg";

import "./Home.css";

const Home = () => {
	return (
		<>
			<Heading fontSize={25} textAlign="center">
				If you're new here, then maybe your best course would be to
				tread lightly...
			</Heading>

			<Stack
				as="section"
				direction={{ base: "column", md: "row" }}
				align="center"
				justify="space-between"
				mt={{ base: 10, md: 20 }}
				spacing={{ base: 10, md: 20, xl: 52 }}
			>
				<Heading fontSize={{ base: "45px", sm: "55px", md: "100px" }}>
					ABOUT
				</Heading>

				<Stack direction="column" spacing={9}>
					<Box>
						<Text mb={4}>
							Breaking Bad follows protagonist Walter White (Bryan
							Cranston), a chemistry teacher who lives in New
							Mexico with his wife (Anna Gunn) and teenage son (RJ
							Mitte) who has cerebral palsy. White is diagnosed
							with Stage III cancer and given a prognosis of two
							years left to live.
						</Text>

						<Text>
							With a new sense of fearlessness based on his
							medical prognosis, and a desire to secure his
							family's financial security, White chooses to enter
							a dangerous world of drugs and crime and ascends to
							power in the world. The series explores how a fatal
							diagnosis such as White's releases a typical man
							from the daily concerns and constraints of normal
							society and follows his transformation from mild
							family man to a kingpin of the drug trade.
						</Text>
					</Box>

					<Box>
						<Heading fontSize={25} mb={2}>
							CREATOR
						</Heading>
						<Text>Vince Gilligan</Text>
					</Box>

					<Box>
						<Heading fontSize={25} mb={2}>
							STARRING
						</Heading>
						<Text>
							Bryan Cranston, Anna Gunn, Aaron Paul, Dean Norris,
							Betsy Brandt, RJ Mitte, Bob Odenkirk, Giancarlo
							Esposito, Jonathan Banks
						</Text>
					</Box>
				</Stack>
			</Stack>

			<Stack
				as="section"
				direction={{ base: "column", md: "row-reverse" }}
				align="center"
				justify="space-between"
				mt="36"
				spacing={{ base: 10, xl: 52 }}
			>
				<Heading fontSize={{ base: "45px", sm: "55px", md: "100px" }}>
					SEASONS
				</Heading>

				<Wrap direction={"row"} spacing={"8"} justify="center">
					<SeasonCard imageUrl={season1} text="Season 1 (2008)" />
					<SeasonCard imageUrl={season2} text="Season 2 (2009)" />
					<SeasonCard imageUrl={season3} text="Season 3 (2010)" />
					<SeasonCard imageUrl={season4} text="Season 4 (2011)" />
					<SeasonCard
						imageUrl={season5}
						text="Season 5 (2012 - 2013)"
					/>
				</Wrap>
			</Stack>

			<Stack
				as="section"
				direction={{ base: "column", md: "row" }}
				align="center"
				justify="space-between"
				mt="36"
				spacing={{ base: 10, md: 20, xl: 52 }}
			>
				<Heading
					fontSize={{ base: "45px", sm: "55px", md: "100px" }}
					textAlign={"center"}
				>
					BETTER CALL SAUL
				</Heading>

				<Stack direction="column" spacing={9}>
					<Box>
						<Text mb={4}>
							Better Call Saul{" "}
							<Text as={"strong"}>(Spin-Off)</Text> follows the
							transformation of James "Jimmy" McGill (Bob
							Odenkirk), a former con artist who is trying to
							become a respectable lawyer, into the personality of
							the flamboyant criminal lawyer Saul Goodman, over
							the six-year period prior to the events of Breaking
							Bad; spanning from approximately 2002 to 2008.
						</Text>

						<Text>
							Jimmy is inspired to turn his life around from his
							past con-man approach, where he was known as
							"Slippin' Jimmy", by his older brother Chuck McGill
							(Michael McKean), a senior partner alongside Howard
							Hamlin (Patrick Fabian) in the Albuquerque law firm
							Hamlin, Hamlin & McGill, as well as Kim Wexler (Rhea
							Seehorn), one of the firm's legal associates who
							becomes Jimmy's romantic interest.
						</Text>
					</Box>

					<Box>
						<Heading fontSize={25} mb={2}>
							CREATOR
						</Heading>
						<Text>Vince Gilligan and Peter Gould</Text>
					</Box>

					<Box>
						<Heading fontSize={25} mb={2}>
							STARRING
						</Heading>
						<Text>
							Bob Odenkirk, Jonathan Banks, Rhea Seehorn, Patrick
							Fabian, Michael Mando, Michael McKean, Giancarlo
							Esposito, Tony Dalton
						</Text>
					</Box>
				</Stack>
			</Stack>
		</>
	);
};

export default Home;
