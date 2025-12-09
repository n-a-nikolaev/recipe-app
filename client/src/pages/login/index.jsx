import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Alert,
  Box,
  Button,
  Field,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { loginRequest } from "../../services/login";
import { useAuthStore } from "../../store/auth-store";
import useFormController from "../../hooks/use-form-controller";
import { toaster } from "../../components/ui/toaster";

export default function Login() {
  const navigate = useNavigate();
  // get login action from auth store
  const login = useAuthStore((s) => s.login);

  const {
    values: { email, password },
    onChange,
  } = useFormController({ email: "", password: "" });
  const [errMsg, setErrMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();

      try {
        setErrMsg("");
        setLoading(true);
        const response = await loginRequest(email, password);

        toaster.create({ description: `Welcome, ${response.data.username}`, type: "success" });
        login(response.data);
        navigate("/");
      } catch (err) {
        setErrMsg(err?.response?.data?.message || "Login failed");
      } finally {
        setLoading(false);
      }
    },
    [email, password, login, navigate]
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
        as={"form"}
        bg="cardBg"
        p={6}
        borderRadius="card"
        gap={4}
        width="100%"
        maxW="400px"
        boxShadow="card"
        onSubmit={handleLogin}
      >
        <Text fontSize="2xl" fontWeight="bold">
          Login
        </Text>
        {/* Extract in a reusable component */}
        {errMsg && (
          <Alert.Root status="error">
            <Alert.Indicator />
            <Alert.Title>{errMsg}</Alert.Title>
          </Alert.Root>
        )}
        <Field.Root>
          <Field.Label htmlFor="email">Password</Field.Label>
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
          <Input
            placeholder="Password"
            value={password}
            type="password"
            name="password"
            id="password"
            required
            onChange={onChange}
          />
        </Field.Root>
        <Button
          bg="brand.primary"
          color="brand.white"
          width="100%"
          isDisabled={loading}
          type="submit"
        >
          {loading ? "Logging in..." : "Login"}
        </Button>
        <Button
          variant="outline"
          borderColor="brand.primary"
          color="brand.primary"
          width="100%"
          onClick={() => navigate("/register")}
        >
          New here? Register
        </Button>
      </VStack>
    </Box>
  );
}
