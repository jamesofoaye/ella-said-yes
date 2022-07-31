import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import "@fontsource/dancing-script/400.css";
import "@fontsource/dancing-script/700.css";
import "@fontsource/montserrat/400.css";

const colors = {
	brand: {
		forHeading: "#330033",
	},
};

const theme = extendTheme({
	colors,
	fonts: {
		heading: `'Dancing Script', cursive`,
		body: `'Montserrat', sans-serif`,
	},
});

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider theme={theme}>
			<Component {...pageProps} />
		</ChakraProvider>
	);
}

export default MyApp;
