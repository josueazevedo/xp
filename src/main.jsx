import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Xss } from "./pages/Xss.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="xss" element={<Xss />} />
          {/* <Route path="about" element={<About />} /> */}
        </Route>
      </Routes>
    </Router>
  </StrictMode>
);
