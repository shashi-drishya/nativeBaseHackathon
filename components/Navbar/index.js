import { Box, ArrowBackIcon, Button, Flex } from "native-base";
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
          <ArrowBackIcon
            cursor="pointer"
            onClick={() => setModalVisible(true)}
          />
        </Box>
      </Flex>
    </Box>
  );
}

export default NavBar;
