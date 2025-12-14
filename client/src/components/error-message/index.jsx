import { Alert } from "@chakra-ui/react";

export default function ErrorMessage({ message }) {
  return message ? (
    <Alert.Root status="error">
      <Alert.Indicator />
      <Alert.Title>{message}</Alert.Title>
    </Alert.Root>
  ) : null;
}
