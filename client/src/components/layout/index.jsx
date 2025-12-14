import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Navbar from "./header";
import Footer from "./footer";
import { CONTENT_HEIGHT } from "../../utils";

export default function Layout() {
  return (
    <>
      <Navbar />
      <Box
        id="main-content"
        bg="bg"
        color="fg"
        minH={CONTENT_HEIGHT}
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
