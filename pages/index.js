import Head from "next/head";
import {
	Box,
	Flex,
	Heading,
	Center,
	Image,
	Link,
	Stack,
	VStack,
	Text,
	SimpleGrid,
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

				{/** Our Story Section */}
				<Box
					backgroundImage={"/assets/our-story-bg.jpg"}
					bgSize={"cover"}
					bgPosition={"center"}
				>
					<SimpleGrid columns={[1, 2]}>
						<VStack justifyContent="center" mx={"auto"}>
							<Flex>
								<Image src="/assets/love.jpg" alt="Love" />
								<Heading
									fontWeight={700}
									fontSize={["5xl", "5xl", "5xl", "8xl"]}
									ml={4}
									color={"brand.forHeading"}
								>
									Our Story
								</Heading>
							</Flex>

							<Text fontSize={"lg"} textAlign="center" px={[4, 6, 8]} pt={4}>
								We met in 2018 during our final year in Senior High School. We
								were in different schools so we exchanged numbers via orbit.
								After our integrated science final paper, we ended up chatting
								all night and the rest is history!
							</Text>

							<Image src="/assets/ring.jpg" alt="Rings" pt={3} />
						</VStack>

						<Box>
							<Image
								src="/assets/ella-and-james.jpg"
								alt="James and Emmanuella"
							/>
						</Box>
					</SimpleGrid>
				</Box>

				{/** From Long Distance to Long-Term Section */}
				<Box>
					<SimpleGrid columns={[1, 2]}>
						<Box display={["none", "flex"]}>
							<Image src="/assets/ella.jpg" alt="Emmanuella" p={[5, 12]} />
						</Box>

						<VStack justifyContent="center" mx={"auto"}>
							<Flex>
								<Heading
									fontWeight={700}
									fontSize={["5xl", "5xl", "5xl", "6xl", "7xl", "8xl"]}
									color={"brand.forHeading"}
									textAlign="center"
									mt={5}
								>
									From Long Distance
									<br />
									to Long-Term
								</Heading>
							</Flex>

							<Text fontSize={"lg"} textAlign="center" px={[4, 6, 8]}>
								We've spent over 4 years living, schooling and working in
								different cities, but distance has only made our relationship
								stronger.
								<br />
								We are more rock solid now than ever, and we're excited to take
								that next big leap in our relationship.
							</Text>

							<Image src="/assets/ring.jpg" alt="Rings" pt={3} />
						</VStack>

						<Box display={["flex", "none"]}>
							<Image src="/assets/ella.jpg" alt="Emmanuella" p={[5, 12]} />
						</Box>
					</SimpleGrid>
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
