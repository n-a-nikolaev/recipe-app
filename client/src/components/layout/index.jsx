import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Navbar from "./header";
import Footer from "./footer";

export default function Layout() {
  return (
    <>
      <Navbar />
      <Box
        id="main-content"
        bg="bg"
        color="fg"
        minH="calc(100vh - var(--header-height) - var(--footer-height))"
        display="flex"
        alignItems="start"
        justifyContent="center"
        width="100%"
      >
        <Outlet />
      </Box>
      <Footer />
    </>
  );
}
