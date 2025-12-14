import { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Provider from "./components/ui/provider"; // chakra + theme wrapper
import { Toaster } from "./components/ui/toaster";
import Spinner from "./components/spinner";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider>
      <Suspense fallback={<Spinner />}>
        <App />
        <Toaster />
      </Suspense>
    </Provider>
  </BrowserRouter>
);
