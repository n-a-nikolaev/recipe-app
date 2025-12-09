import { Box, Flex, IconButton, HStack, Text, Link } from "@chakra-ui/react";
import { GiChickenOven } from "react-icons/gi";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { MdLogin, MdLogout } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { ColorModeButton } from "../ui/color-mode";
import { useAuthStore } from "../../store/auth-store";
import Navigation from "../routing/navigation";
import MobileMenu from "../routing/mobile-menu";
import { Tooltip } from "../ui/tooltip";
import { useCallback } from "react";
import { logoutRequest } from "../../services/logout";
import { toaster } from "../ui/toaster";

export default function Header() {
  const { isAuthenticated, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = useCallback(async () => {
    try {
      const response = await logoutRequest();
      toaster.create({
        description: response.data.message || "Logged out successfully",
        type: "success",
      });
      logout();
      navigate("/");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  }, [logout, navigate]);

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
              <Tooltip content="Search recipes">
                <IconButton
                  size="sm"
                  aria-label="Search"
                  bg="brand.accent"
                  color="brand.white"
                  _hover={{ bg: "brand.descent" }}
                >
                  <FaMagnifyingGlass />
                </IconButton>
              </Tooltip>
              <ColorModeButton />
              {isAuthenticated ? (
                <Tooltip content="Logout">
                  <IconButton
                    size="sm"
                    bg="brand.accent"
                    color="brand.white"
                    _hover={{ bg: "brand.descent" }}
                    onClick={handleLogout}
                  >
                    <MdLogout />
                  </IconButton>
                </Tooltip>
              ) : (
                <Tooltip content="Login">
                  <IconButton
                    size="sm"
                    bg="brand.accent"
                    color="brand.white"
                    onClick={() => navigate("/login")}
                    _hover={{ bg: "brand.descent" }}
                  >
                    <MdLogin />
                  </IconButton>
                </Tooltip>
              )}
              <MobileMenu />
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
