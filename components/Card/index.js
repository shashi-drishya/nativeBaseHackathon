import {
  AspectRatio,
  Avatar,
  Box,
  Center,
  FlatList,
  Heading,
  HStack,
  Image,
  Skeleton,
  Stack,
  Text,
  VStack,
} from "native-base";
import React, { useContext } from "react";
import { AppContext } from "../ContextApiProvider/index";
function Card({ imgSrc, imgDetails }) {
  const imgContext = useContext(AppContext);
  const { setSelectedImg, setModalVisible, inputVal } = imgContext;
  const handleOnPress = ({ imgDetails, e }) => {
    setSelectedImg(imgDetails);
    setModalVisible(true);
  };
  console.log(imgDetails);
  const data = [
    {
      id: 1,
      avatarUrl: imgSrc,
    },
  ];
  return !imgSrc ? (
    <Center w="350">
      <VStack
        w="90%"
        maxW="400"
        borderWidth="1"
        space={8}
        overflow="hidden"
        rounded="md"
        _dark={{
          borderColor: "coolGray.500",
        }}
        _light={{
          borderColor: "coolGray.200",
        }}
      >
        <Skeleton h="40" />
        <Skeleton.Text px="4" />
        <Skeleton px="4" my="4" rounded="md" startColor="primary.100" />
      </VStack>
    </Center>
  ) : (
    <Box
      alignItems="center"
      m="4"
      onClick={(e) => {
        // setModalVisible(!modalVisible);
        handleOnPress({ imgDetails, e });
      }}
      _hover={{
        bg: "primary.700",
        borderColor: "primary.400",
        boxShadow: "-15px -15px 15px #ffffff33, 15px 15px 15px #0000001a",
        transform: "scale(1.5)",
      }}
      cursor="pointer"
    >
      <Box
        maxW="80"
        rounded="lg"
        overflow="hidden"
        borderColor="coolGray.200"
        borderWidth="1"
        _dark={{
          borderColor: "coolGray.600",
          backgroundColor: "gray.700",
        }}
        _web={{
          shadow: 2,
          borderWidth: 0,
        }}
        _light={{
          backgroundColor: "gray.50",
        }}
      >
        <Box>
          <AspectRatio w="100%" ratio={16 / 9}>
            <Image
              source={{
                uri: imgSrc,
              }}
              alt="image"
            />
          </AspectRatio>
        </Box>
        <Stack p="4" space={3}>
          <Stack space={2}>
            <Heading size="md" ml="-1">
              Searching {inputVal} on Pixel
            </Heading>
            <HStack
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
            >
              <FlatList
                data={data}
                renderItem={({ item }) => (
                  <Box>
                    <Avatar
                      size="48px"
                      source={{
                        uri: item.avatarUrl,
                      }}
                    />
                  </Box>
                )}
                keyExtractor={(item) => item.id}
                w="100"
              />
              <Text
                fontSize="xs"
                _light={{
                  color: "violet.500",
                }}
                _dark={{
                  color: "violet.400",
                }}
                fontWeight="1000"
                ml="-0.5"
                mt="-1"
              >
                {imgDetails.photographer}
              </Text>
            </HStack>
          </Stack>
          <Text fontWeight="400">
            Bengaluru (also called Bangalore) is the center of India's high-tech
            industry. The city is also known for its parks and nightlife.
          </Text>
        </Stack>
      </Box>
    </Box>
  );
}

export default Card;
