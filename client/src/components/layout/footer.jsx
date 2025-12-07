import { Box } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box as="footer" textAlign="center" py={4} bg="bg" color="fg">
      &copy; {new Date().getFullYear()}, by Nikolay Nikolaev
    </Box>
  );
}
