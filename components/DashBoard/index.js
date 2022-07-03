import Card from "../Card";
import { AppContext } from "../ContextApiProvider/index";

import HeaderSearch from "../Search";
import { Center, Container, Flex, Heading, Stack, Text } from "native-base";
import { useContext } from "react";
export default function Home() {
  const imgContext = useContext(AppContext);
  const { imgArr } = imgContext;
  console.log({ imgArrinDashBoard: imgArr });

  return (
    <Center position="relative">
      <Container>
        <Heading>
          An<Text color="emerald.500"> Image Search </Text>
          Appplication
        </Heading>
        <HeaderSearch />
        <Flex
          direction="row"
          mb="2.5"
          mt="1.5"
          justifyContent={["center", "center", "center", "space-between"]}
          flex={1}
          flexWrap="wrap"
          // style={{
          //   flex: 1,
          //   flexWrap: "wrap",
          //   margin: "auto",
          // }}
        >
          {imgArr.map((img) => (
            <Card
              key={img.id}
              
              imgSrc={img.src.medium}
              cursor="pointer"
              imgDetails={img}
            />
          ))}
        </Flex>
      </Container>
    </Center>
  );
}
