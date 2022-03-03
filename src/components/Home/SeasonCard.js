import { Image, Text, VStack, WrapItem } from "@chakra-ui/react";

const SeasonCard = props => {
	return (
		<WrapItem>
			<VStack as="article" spacing={4}>
				<Image src={props.imageUrl} h={"300px"} />
				<Text align={"center"}>{props.text}</Text>
			</VStack>
		</WrapItem>
	);
};

export default SeasonCard;
