import { useNavigate } from "react-router-dom";
import { useCallback, useState } from "react";
import {
  Alert,
  Box,
  Button,
  Field,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { registerRequest } from "../../services/register";
import { useAuthStore } from "../../store/auth-store";
import useFormController from "../../hooks/use-form-controller";
import { toaster } from "../../components/ui/toaster";

export default function Register() {
  const navigate = useNavigate();
  // get login action from auth store
  const login = useAuthStore((s) => s.login);

  const {
    values: { username, email, password },
    onChange,
  } = useFormController({ username: "", email: "", password: "" });
  const [errMsg, setErrMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = useCallback(
    async (event) => {
      event.preventDefault();

      try {
        setLoading(true);
        setErrMsg("");

        const res = await registerRequest(username, email, password);

        toaster.create({
          description: "User created: username",
          type: "success",
        });
        login(res.data);
        navigate("/");
      } catch (err) {
        setErrMsg(err?.response?.data?.message || "Registration failed");
      } finally {
        setLoading(false);
      }
    },
    [username, email, password, login, navigate]
  );

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
        as="form"
        bg="cardBg"
        p={6}
        borderRadius="card"
        gap={4}
        width="100%"
        maxW="400px"
        boxShadow="card"
        onSubmit={handleRegister}
      >
        <Text fontSize="2xl" fontWeight="bold">
          Register
        </Text>
        <ErrorMessage message={errMsg} />
        {/* Username field */}
        <Field.Root>
          <Field.Label htmlFor="email">Username</Field.Label>
          <Input
            placeholder="Username"
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={onChange}
          />
        </Field.Root>
        {/* Email field */}
        <Field.Root>
          <Field.Label htmlFor="email">Email</Field.Label>
          <Input
            placeholder="Email"
            value={email}
            type="email"
            name="email"
            id="email"
            required
            onChange={onChange}
          />
        </Field.Root>
        <Field.Root>
          <Field.Label htmlFor="password">Password</Field.Label>
          {/* TODO: Add password strength meter */}
          <Input
            placeholder="Password"
            value={password}
            type="password"
            id="password"
            name="password"
            onChange={onChange}
          />
        </Field.Root>
        <Button
          bg="brand.primary"
          color="brand.white"
          width="100%"
          type="submit"
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
