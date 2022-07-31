import Head from "next/head";
import Image from "next/image";
import {
	Box,
	Flex,
	Heading,
	Center,
	chakra,
	Link,
	Stack,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Emmanuella Said Yes to James🎉🥳. We are engaged💍👩</title>
				<link rel="icon" href="/favicon.ico" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta
					name="description"
					content={`James and Emmanuella met in 2018 during our final year in Senior High School. We spent 4 years dating and got engaged in 2022.`}
				/>
				<meta
					property="og:title"
					content="Emmanuella Said Yes to James🎉🥳. We are engaged💍👩"
				/>
				<meta
					property="og:description"
					content={`James and Emmanuella met in 2018 during our final year in Senior High School. We spent 4 years dating and got engaged in 2022.`}
				/>
				<meta
					property="og:image"
					content="https://www.ellasaidyes.com/assets/ella-and-james.jpg"
				/>
			</Head>

			<main>
				{/** Hero Section */}
				<Box
					backgroundImage={"/assets/bg.jpg"}
					bgSize={"cover"}
					bgPosition={"center"}
					bgAttachment={"fixed"}
					w={"100vw"}
					minH={"100vh"}
				>
					<Heading fontWeight={400} fontSize={["5xl", "8xl"]}>
						<Center w={"100vw"} h={"100vh"} textAlign="center">
							JAMES
							<br />
							&amp;
							<br />
							EMMANUELLA
						</Center>
					</Heading>
				</Box>
			</main>

			<footer>
				<Stack direction={["column", "row"]} justifyContent="center" m={4}>
					<Box>
						<Center>
							Designed by
							<Link
								href="https://yawprecious.netlify.app/"
								isExternal
								rel="noopener noreferrer"
								title="Yaw Tetteh Precious"
								mx={1}
							>
								Yaw Tetteh Precious <ExternalLinkIcon ml="2px" />
							</Link>
						</Center>
					</Box>

					<Box>
						<Center>&amp; Developed with ❤️ by</Center>
					</Box>

					<Box>
						<Center>
							<Link
								href="https://ofori-james-ayerakwa.me"
								isExternal
								rel="noopener noreferrer"
								title="Ofori James Ayerakwa"
								mx={1}
							>
								Ofori James Ayerakwa <ExternalLinkIcon ml="2px" />
							</Link>
						</Center>
					</Box>
				</Stack>
			</footer>
		</div>
	);
}
