import { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Provider from "./components/ui/provider"; // chakra + theme wrapper
import { Box } from "@chakra-ui/react";
import reactLove from "./assets/react-love.svg";
import { Toaster } from "./components/ui/toaster";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider>
      <Suspense
        fallback={
          <Box
            minH={"100vh"}
            display={"flex"}
            alignItems="center"
            justifyContent={"center"}
          >
            <img src={reactLove} alt="react logo" />
          </Box>
        }
      >
        <App />
        <Toaster />
      </Suspense>
    </Provider>
  </BrowserRouter>
);
