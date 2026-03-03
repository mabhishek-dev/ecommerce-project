import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router"; //react-routing
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  //!= tells ts that root exists in index.html
  <StrictMode>
    {/* react-routing */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);

/**
 * For React routing, these are the steps that has to be followed:
 * First, you need to install using npm, the React router.
 * Then import and enclose the app component in the "BrowserRouter" component in main.jsx
 * Similarly, we need to import and enclose the app function as a component with "Routes" in app.jsx
 * So for each page we're gonna add a "Route". This is as if telling React that these are different pages. So in this way multiple pages can be added.
 */
