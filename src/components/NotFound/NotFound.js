import { Heading, Image } from "@chakra-ui/react";

import brokenPlateImg from "../../assets/img/broken-plate.png";

const NotFound = () => {
	return (
		<>
			<Image
				src={brokenPlateImg}
				alt="Breaking Bad Broken Plate for 404 Not Found Page"
				mx="auto"
				mb={16}
				px={10}
			/>

			<Heading textAlign="center">404 - Not Found</Heading>
		</>
	);
};

export default NotFound;
