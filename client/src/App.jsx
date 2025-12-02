import { Center, HStack, Button } from "@chakra-ui/react";
import React, { useCallback } from 'react';
import { ColorModeButton } from "./components/ui/color-mode";
import { useAuthStore } from "./store/auth-store";

const App = () => {
  const { user, isAuthenticated, login, logout } = useAuthStore();
  const fakeLogin = useCallback(() => {
    login({ id: 1, name: "John Doe", email: "john.doe@gmail.com" }, "fake-jwt-token");
  }, [login]);

  return (
    <>
      <Center>
        {isAuthenticated
          ? (
            <>
              <HStack>{JSON.stringify(user, null, 2)}</HStack>
              <HStack><Button onClick={logout}>Logout</Button></HStack>
            </>
          )
          : (<Button onClick={fakeLogin}>Fake Login</Button>)}
      </Center>
      <ColorModeButton value="Change theme" data-testid="change-theme" />
    </>
  )
}

export default App;