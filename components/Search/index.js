import React, { useContext, useState } from "react";
import { Box, HStack, Input, SearchIcon } from "native-base";
import { AppContext } from "../ContextApiProvider/index";
function HeaderSearch() {
  const imgContext = useContext(AppContext);
  const [isOpen, setIsOpen] = useState(false);
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
        <Input
          mx="3"
          id="search-bar"
          placeholder="Search Image"
          w="75%"
          maxWidth="300px"
          value={inputVal}
          onChange={(e) => updateInputVal(e.target.value)}
        />
      </Box>
      <SearchIcon style={{ marginTop: "5px" }} onClick={expandIcon} />
    </HStack>
  );
}

export default HeaderSearch;
