import { Box, Button, Center, Fab, Icon, Modal, ScrollView } from "native-base";
import React, { useEffect } from "react";

function ModalBox({ modalVisible, setModalVisible }) {
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [size, setSize] = React.useState("md");

  const handleSizeClick = (newSize) => {
    setSize(newSize);
    setModalVisible(!modalVisible);
  };

  const height = window.innerHeight / 2;
  console.log({ height });
  return (
    <Box
      className="Docker Panel"
      width="200px"
      bg="amber.100"
      position="absolute"
      h="100vh"
      right="0"
    >
      This is docker panel
    </Box>
  );
}

export default ModalBox;
