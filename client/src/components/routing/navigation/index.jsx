import { Box, Separator } from "@chakra-ui/react";
import NavLink from "../nav-link";

// Example menu structure
const links = [
  { label: "Recipes", href: "/recipes" },
  { label: "Favorites", href: "/favorites" },
  { label: "Categories", href: "/categories" },
  { label: "Add Recipe", href: "/add" },
];

export default function Navigation({ isMobile }) {
  return (
    <>
      {links.map((link, index) => (
        <Box key={link.label}>
          <NavLink href={link.href} isMobile={isMobile}>
            {link.label}
          </NavLink>
          {isMobile && index < links.length - 1 && <Separator />}
        </Box>
      ))}
    </>
  );
}
