import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Box, Button, Input, Text, VStack } from "@chakra-ui/react";
import { registerRequest } from "../../services/register";

export default function Register() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleRegister() {
    try {
      setLoading(true);
      setErrMsg("");

      await registerRequest(username, email, password);
      navigate("/login");
    } catch (err) {
      setErrMsg(err?.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      width={400}
      height="100%"
      p={0}
    >
      <VStack
        bg="cardBg"
        p={6}
        borderRadius="card"
        gap={4}
        width="100%"
        maxW="400px"
        boxShadow="card"
      >
        <Text fontSize="2xl" fontWeight="bold">
          Register
        </Text>

        {errMsg && <Text color="tomato">{errMsg}</Text>}

        <Input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <Input
          placeholder="Email"
          value={email}
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          placeholder="Password"
          value={password}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          bg="brand.primary"
          color="brand.white"
          width="100%"
          onClick={handleRegister}
          isDisabled={loading}
        >
          {loading ? "Registering..." : "Register"}
        </Button>

        <Button
          variant="outline"
          borderColor="brand.primary"
          color="brand.primary"
          width="100%"
          onClick={() => navigate("/login")}
        >
          Already have an account? Login
        </Button>
      </VStack>
    </Box>
  );
}
