// import NavBar from "../Navbar";
import Videos from "../../components/TutorialVideos/index.json";
import Card from "../Card";
import HeaderSearch from "../Search";
import { Center, Container, Flex, Heading, Stack, Text } from "native-base";
import { useEffect, useState } from "react";
export default function Home() {
  console.log({ tutorialVIdeos: Videos.videos });
  const [images, setImages] = useState([]);
  useEffect(async () => {
    const fetchedData = await fetch(
      `https://api.pexels.com/v1/curated?page=12&per_page=12`
    );
    const json = await fetchedData.json();
    const json1 = json;
    setImages(json1.photos);
  }, []);
  console.log({ images });
  return (
    <Center position="relative">
      <Container>
        <Heading>
          A<Text color="emerald.500"> Image Search </Text>
          Appplication
        </Heading>
        <HeaderSearch />
        <Flex
          direction="row"
          mb="2.5"
          mt="1.5"
          justifyContent="space-between"
          space={3}
          style={{
            flex: 1,
            flexWrap: "wrap",
            margin: "auto",
          }}
        >
          {images.map((img) => (
            <Card key={img.alt} imgSrc={img.src.medium} />
          ))}
        </Flex>
      </Container>
    </Center>
  );
}
