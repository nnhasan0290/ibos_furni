import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import ContextProvider from "./utils/Context.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ChakraProvider>
      <ContextProvider>
        <StrictMode>
          <App />
        </StrictMode>
      </ContextProvider>
    </ChakraProvider>
  </BrowserRouter>
);
