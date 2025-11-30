import { Center, HStack, Button } from "@chakra-ui/react";
import React from 'react';
import { ColorModeButton } from "./components/ui/color-mode";

const App = () => {
  return (
   <>
    <ColorModeButton value="Change theme" data-testid="change-theme" />
   </>
  )
}

export default App;