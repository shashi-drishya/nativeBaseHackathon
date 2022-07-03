import React from "react";
import { NativeBaseProvider, extendTheme } from "native-base";
import NavBar from "./components/Navbar";
import Home from "./components/DashBoard";
import ModalBox from "./components/Modal";
import AppContextProvider from "./components/ContextApiProvider";
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
      <AppContextProvider>
        <NavBar />
        <Home />
        <ModalBox modalVisible={true} />
      </AppContextProvider>
    </NativeBaseProvider>
  );
}
