import { extendTheme, theme as base } from "@chakra-ui/react";

const theme = extendTheme({
	fonts: {
		heading: `Oswald, ${base.fonts?.heading}`,
		body: `Proxima Nova, ${base.fonts?.body}`,
	},
	config: {
		initialColorMode: "dark",
		useSystemColorMode: false,
	},
});

export default theme;
