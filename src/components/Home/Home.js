import { Heading, Text, Stack, Box } from "@chakra-ui/react";

import "./Home.css";

const Home = () => {
	return (
		<>
			<Heading fontSize={25} textAlign="center">
				If you're new here, then maybe your best course would be to tread lightly...
			</Heading>

			<Stack
				direction="row"
				align="center"
				justify="space-between"
				mt="14"
				spacing="48"
			>
				<Heading fontSize="100">ABOUT</Heading>

				<Stack direction="column" spacing={9}>
					<Text>
						Breaking Bad follows protagonist Walter White (Bryan Cranston), a chemistry teacher who lives in New Mexico with his wife (Anna Gunn) and teenage son (RJ Mitte) who has cerebral palsy. White is diagnosed with Stage III cancer and given a prognosis of two years left to live. With a new sense of fearlessness based on his medical prognosis, and a desire to secure his family's financial security, White chooses to enter a dangerous world of drugs and crime and ascends to power in the world. The series explores how a fatal diagnosis such as White's releases a typical man from the daily concerns and constraints of normal society and follows his transformation from mild family man to a kingpin of the drug trade.
					</Text>

					<Box>
						<Heading fontSize={25} mb={2}>CREATOR</Heading>
						<Text>Vince Gilligan</Text>
					</Box>

					<Box>
						<Heading fontSize={25} mb={2}>STARRING</Heading>
						<Text>
							Bryan Cranston, 
							Anna Gunn, 
							Aaron Paul, 
							Dean Norris, 
							Betsy Brandt, 
							RJ Mitte, 
							Bob Odenkirk, 
							Giancarlo Esposito, 
							Jonathan Banks
						</Text>
					</Box>
				</Stack>
			</Stack>
		</>
	);
}

export default Home;
