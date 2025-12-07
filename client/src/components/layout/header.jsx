import {
  Box,
  Flex,
  IconButton,
  HStack,
  Button,
  Text,
  Link,
} from "@chakra-ui/react";
import { GiChickenOven } from "react-icons/gi";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { MdLogin, MdLogout } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { ColorModeButton } from "../ui/color-mode";
import { useAuthStore } from "../../store/auth-store";
import Navigation from "../routing/navigation";
import MobileMenu from "../routing/mobile-menu";

export default function Navbar() {
  const { isAuthenticated, logout } = useAuthStore();
  const navigate = useNavigate();

  return (
    <>
      <Box
        bg="brand.primary"
        px={4}
        position="sticky"
        top="0"
        zIndex="99"
        boxShadow="sm"
      >
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <Flex h={16} alignItems="center" justifyContent="start" gap={8}>
            <Link
              href="/"
              color="brand.white"
              display="flex"
              alignItems="center"
              gap={2}
            >
              <GiChickenOven color="brand.white" size={32} />
              <Text fontWeight="700" color="brand.white">
                RecipeApp
              </Text>
            </Link>
            {/* Desktop nav */}
            <HStack spacing={0} display={{ base: "none", md: "flex" }}>
              <Navigation />
            </HStack>
          </Flex>

          <Flex h={16} alignItems="center" justifyContent="end" gap={8}>
            <Flex alignItems="center" gap={2}>
              <IconButton
                size="sm"
                aria-label="Search"
                bg="brand.accent"
                color="brand.white"
                _hover={{ bg: "brand.descent" }}
              >
                <FaMagnifyingGlass />
              </IconButton>
              <ColorModeButton />
              {isAuthenticated ? (
                <IconButton
                  size="sm"
                  bg="brand.accent"
                  color="brand.white"
                  _hover={{ bg: "brand.descent" }}
                  onClick={logout}
                >
                  <MdLogout />
                </IconButton>
              ) : (
                <IconButton
                  size="sm"
                  bg="brand.accent"
                  color="brand.white"
                  onClick={() => navigate("/login")}
                  _hover={{ bg: "brand.descent" }}
                >
                  <MdLogin />
                </IconButton>
              )}
              <MobileMenu />
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
