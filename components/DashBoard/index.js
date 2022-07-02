// import NavBar from "../Navbar";
import Videos from "../../components/TutorialVideos/index.json";
// import VideoPlay from "../Video";
import Card from "../Card";
import HeaderSearch from "../Search";
import { Container, Heading, Text } from "native-base";
export default function Home() {
  console.log({ tutorialVIdeos: Videos.videos });
  const videosLinks = [
    {
      videoLink: "link1",
      duration: "time",
      rating: "45",
      author: "ram",
      syllabus: ["s1", "s2", "s3"],
    },
    {
      videoLink: "link2",
      duration: "time",
      rating: "67",
      author: "ram",
      syllabus: ["s1", "s2", "s3"],
    },
    {
      videoLink: "link3",
      duration: "time",
      rating: "76",
      author: "ram",
      syllabus: ["s1", "s2", "s3"],
    },
  ];
  const tutorialVideos = Videos.videos;
  return (
    <Container>
      <Heading>
        A<Text color="emerald.500"> Image Search </Text>
        Appplication
      </Heading>
      <HeaderSearch />
      <Card imgSrc="https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg" />
    </Container>
  );
}
