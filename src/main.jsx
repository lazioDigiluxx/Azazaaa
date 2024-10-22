import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AnimatedCursor from "react-animated-cursor";
// import {Planets} from 'react-preloaders';
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <AnimatedCursor
      innerSize={8}
      outerSize={35}
      innerScale={1}
      outerScale={2}
      outerAlpha={0}
      hasBlendMode={true}
      innerStyle={{
        backgroundColor: "var(--cursor-color)",
      }}
      outerStyle={{
        border: "3px solid var(--cursor-color)",
      }}
    />
  </StrictMode>
);
