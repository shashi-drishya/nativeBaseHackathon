import React, { useState } from "react";
import {
  AspectRatio,
  Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Input,
  SearchIcon,
  Stack,
  Text,
} from "native-base";
function HeaderSearch() {
  const [isOpen, setIsOpen] = useState(false);
  function expandIcon(e) {}
  return (
    <Box m="2">
      <Box alignItems="center">
        <Input
          mx="3"
          id="search-bar"
          placeholder="Search Image"
          w="75%"
          maxWidth="300px"
        />
      </Box>
      <SearchIcon style={{ marginTop: "5px" }} onClick={expandIcon} />
    </Box>
  );
}

export default HeaderSearch;
