import { Link } from "@chakra-ui/react";
import React from "react";

export default function NavLink({ href, children, isMobile }) {
  return (
    <Link
      px={isMobile ? 0 : 2}
      py={2}
      rounded="md"
      fontWeight="500"
      href={href}
      border={0}
      outline={0}
      _hover={{
        textDecoration: isMobile ? "none" : "underline",
      }}
    >
      {children}
    </Link>
  );
}
