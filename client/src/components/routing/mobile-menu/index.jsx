import {
  IconButton,
  Drawer,
  Portal,
  CloseButton,
  Stack,
  StackSeparator,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
import Navigation from "../navigation";

export default function MobileMenu() {
  return (
    <Drawer.Root>
      <Drawer.Trigger asChild>
        {/* Mobile hamburger */}
        <IconButton
          size="sm"
          aria-label="Open menu"
          display={{ base: "flex", md: "none" }}
          bg="brand.accent"
          color="brand.white"
          _hover={{ bg: "brand.descent" }}
        >
          <AiOutlineMenu />
        </IconButton>
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Header>
              <Drawer.Title>Menu</Drawer.Title>
            </Drawer.Header>
            <Drawer.Body>
              <Stack separator={<StackSeparator />}>
                <Navigation isMobile={true} />
              </Stack>
            </Drawer.Body>
            <Drawer.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
}
