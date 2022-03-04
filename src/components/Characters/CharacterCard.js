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
	ModalFooter,
	Avatar,
	Flex,
	Text,
	useDisclosure,
} from "@chakra-ui/react";

import Card from "react-animated-3d-card";

const CharacterCard = props => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	const cardStyles = {
		backgroundImage: `url(${props.img})`,
		backgroundPosition: "center",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		width: "250px",
		height: "350px",
	};

	return (
		<>
			<Card style={cardStyles} shineStrength={0.1} onClick={onOpen}>
				<Box></Box>
				<Box></Box>
				<Box></Box>
				<Box></Box>
				<Heading textAlign="center" pt="60" fontSize="25px">
					{props.name.toUpperCase()}
				</Heading>
			</Card>

			<Modal isOpen={isOpen} onClose={onClose}>
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
						<Text>{props.nickname}</Text>
						<Text>{props.birthday}</Text>
						<Text>{props.occupation}</Text>
						<Text>{props.status}</Text>
						<Text>{props.portrayed}</Text>
					</ModalBody>

					<ModalFooter>
						<Button colorScheme="blue" mr={3} onClick={onClose}>
							Close
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};

export default CharacterCard;
