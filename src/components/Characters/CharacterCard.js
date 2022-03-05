import {
	Box,
	Heading,
	Button,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
	Avatar,
	Flex,
	Text,
	WrapItem,
	useDisclosure,
} from "@chakra-ui/react";

import useWindowWidth from "../../hooks/useWindowWidth";
import Card from "react-animated-3d-card";

import { GiFilmProjector } from "react-icons/gi";
import { FaBirthdayCake, FaUserAlt, FaHeartbeat } from "react-icons/fa";
import { IoBriefcase } from "react-icons/io5";

const CharacterCard = props => {
	const width = useWindowWidth();
	const { isOpen, onOpen, onClose } = useDisclosure();

	const cardStyles = {
		backgroundImage: `url(${props.img})`,
		backgroundPosition: "center",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		width: width < 480 ? "100px" : "200px",
		height: width < 480 ? "180px" : "300px",
	};

	return (
		<WrapItem>
			<Card style={cardStyles} shineStrength={0.1} onClick={onOpen}>
				<Box></Box>
				<Box></Box>
				<Box></Box>
				<Box></Box>
				<Heading
					textAlign="center"
					pt={{ base: "36", sm: 56 }}
					fontSize={{ base: "13px", sm: "25px" }}
				>
					{props.name.toUpperCase()}
				</Heading>
			</Card>

			<Modal isOpen={isOpen} onClose={onClose} colorScheme="red">
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>
						<Flex alignItems={"center"} columnGap={4}>
							<Avatar name={props.name} src={props.img} />
							{props.name}
						</Flex>
					</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<Flex direction="column" rowGap={3}>
							<Flex align="center" columnGap={3}>
								<FaUserAlt size={25} />
								<Text fontSize={17}>{props.nickname}</Text>
							</Flex>

							<Flex align="center" columnGap={3}>
								<FaBirthdayCake size={25} />
								<Text fontSize={17}>{props.birthday}</Text>
							</Flex>

							<Flex align="center" columnGap={3}>
								<IoBriefcase size={25} />
								{props.occupation.join(", ")}
							</Flex>

							<Flex align="center" columnGap={3}>
								<FaHeartbeat size={25} />
								<Text fontSize={17}>{props.status}</Text>
							</Flex>

							<Flex align="center" columnGap={3}>
								<GiFilmProjector size={25} />
								<Text fontSize={17}>{props.portrayed}</Text>
							</Flex>

							<Button
								colorScheme="blue"
								mt={5}
								mb={2}
								alignSelf="flex-end"
								onClick={onClose}
							>
								Close
							</Button>
						</Flex>
					</ModalBody>
				</ModalContent>
			</Modal>
		</WrapItem>
	);
};

export default CharacterCard;
