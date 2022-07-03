import {
  Box,
  AspectRatio,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  ArrowForwardIcon,
  FlatList,
  Avatar,
} from "native-base";
import React, { useContext, useEffect } from "react";
import { AppContext } from "../ContextApiProvider";

function ModalBox() {
  console.log(process.env.PIXEL_API_KEY);
  const { selectedImg, isModalVisible, setModalVisible } =
    useContext(AppContext);
  const imgSrc = selectedImg?.src?.medium || "";
  console.log({ selectedImg });
  const dockerRef = React.useRef();
  const handleSizeClick = (newSize) => {};
  console.log({ isModalVisible });

  const updatePostion = (dockerRef, e) => {
    if (dockerRef.current) {
      let element = dockerRef.current;
      let top =
        window.scrollY + window.innerHeight / 2 - element.offsetHeight / 2;
      element.style.top = `${top}px`;
    }
  };
  const data = [
    {
      id: 1,
      avatarUrl: imgSrc,
    },
  ];
  useEffect(() => {
    if (isModalVisible) {
      window.addEventListener("scroll", function (event) {
        updatePostion(dockerRef, event);
      });
    }
  });

  if (!isModalVisible) return "";

  return (
    <Box
      className="Docker Panel"
      width="300px"
      bg="primary.300"
      position="absolute"
      h="100vh"
      right="0"
      ref={dockerRef}
      alignItems="center"
      justifyContent="center"
      cursor="col-resize"
    >
      <ArrowForwardIcon
        onClick={() => setModalVisible(false)}
        position="absolute"
        top="20px"
        left="10px"
        cursor="pointer"
      />
      {imgSrc ? (
        <Box alignItems="center" m="0.5">
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
                <HStack
                  flexDirection="row"
                  justifyContent={[
                    "center",
                    "center",
                    "center",
                    "space-between",
                  ]}
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
                    {selectedImg.photographer}
                  </Text>
                </HStack>
              </Stack>
              <Text fontWeight="400">
                Bengaluru (also called Bangalore) is the center of India's
                high-tech industry. The city is also known for its parks and
                nightlife.
              </Text>
            </Stack>
          </Box>
        </Box>
      ) : (
        <Box>No Immage Selected </Box>
      )}
    </Box>
  );
}

export default ModalBox;
