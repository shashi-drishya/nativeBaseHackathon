import { Box } from "native-base";
import React from "react";

function NavBar() {
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
      Login
    </Box>
  );
}

export default NavBar;
