import React from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import './App.scss';
import Header from"./Components/Header";
import LandingPage from"./Components/LandingPage";
import Features from './Components/Features';
import Locations from "./Components/Locations";
import Contact from"./Components/Contact";
import { HStack, Heading, VStack } from "@chakra-ui/react";
import Theme from"./Theme/Theme";

function App() {
  return (
    <ChakraProvider theme={Theme}>
    <main className="App" display={"block"}>
      <HStack className="App-header" display={"block"}>
        <Header/>
      </HStack>
      <LandingPage/>
      <Features/>
      <Locations/>
      <Contact/>
    </main>
    </ChakraProvider>
  );
}

export default App;
