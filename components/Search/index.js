import React, { useContext, useState } from "react";
import { Box, HStack, Input, SearchIcon } from "native-base";
import { AppContext } from "../ContextApiProvider/index";
import { Pressable } from "react-native";
function HeaderSearch() {
  const imgContext = useContext(AppContext);
  const { updateInputVal, inputVal } = imgContext;
  function expandIcon(e) {}
  return (
    <HStack
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      m="2"
    >
      <Box alignItems="center">
        <Pressable
            // onChange={(e) => updateInputVal(e.target.value)}
        // onT
        >
          <Input
            mx="3"
            id="search-bar"
            placeholder="Search Image"
            w="100%"
            maxWidth="300px"
            value={inputVal}
          />
        </Pressable>
      </Box>
      <SearchIcon style={{ marginTop: 5 }} onClick={expandIcon} />
    </HStack>
  );
}

export default HeaderSearch;
