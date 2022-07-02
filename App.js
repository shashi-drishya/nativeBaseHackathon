import React from "react";
import { NativeBaseProvider, extendTheme, Box } from "native-base";
import Test from "./components/Test";
import Dashboard from "./components/DashBoard";
import NavBar from "./components/Navbar";
import Home from "./components/DashBoard";
import ModalBox from "./components/Modal";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });

export default function App() {
  return (
    <NativeBaseProvider>
      <NavBar />
      {/* <Box>THIs is box</Box> */}
      <Home />
      <ModalBox
      // modalVisible={modalVisible}
      // setModalVisible={() => setModalVisible(!modalVisible)}
      // imgSrc={imgSrc}
      />
    </NativeBaseProvider>
  );
}
