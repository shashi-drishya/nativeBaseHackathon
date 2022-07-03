import { Box, ArrowBackIcon, Button, Flex, Pressable } from "native-base";
import React, { useContext } from "react";
import { AppContext } from "../ContextApiProvider";

function NavBar() {
  const { setModalVisible } = useContext(AppContext);
  return (
    <Box
      bg="primary.400"
      p={4}
      _text={{
        fontSize: "md",
        fontWeight: "bold",
        color: "white",
      }}
    >
      <Flex justifyContent="space-between" alignItems="center" direction="row">
        <Box>LOGO</Box>
        <Box>
          <Pressable onPress={() => setModalVisible(true)}>
            <ArrowBackIcon />
          </Pressable>
        </Box>
      </Flex>
    </Box>
  );
}

export default NavBar;
