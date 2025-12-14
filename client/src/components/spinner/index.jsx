import { Box } from "@chakra-ui/react";
import reactLove from "../../assets/react-love.svg";
import { CONTENT_HEIGHT } from "../../utils";

export default function Spinner() {
  return (
    <Box
      minH={CONTENT_HEIGHT}
      display={"flex"}
      alignItems="center"
      justifyContent={"center"}
    >
      <img src={reactLove} alt="react logo" />
    </Box>
  );
}
