import React from "react";
import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Box,
} from "native-base";
import Test from "./components/Test";
import Dashboard from "./components/DashBoard";
import NavBar from "./components/Navbar";
import Home from "./components/DashBoard";

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
      {/* <NavBar /> */}
      {/* <Box>THIs is box</Box> */}
      <Home />
    </NativeBaseProvider>
  );
}
