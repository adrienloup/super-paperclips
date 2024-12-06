import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { version } from "../package.json";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("_superpaperclips_1mm2_3")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

console.log(
  `%c[SP]%c${version}%c@jff`,
  "padding: 4px 3px 3px; background: #1b1b1b; font-weight: bold; color: #fff;",
  "padding: 4px 3px 3px; background: #fff; font-weight: bold; color: #1b1b1b;",
  "padding: 4px 3px 3px; background: #1b1b1b; font-weight: bold; color: #fff;"
);
