import "./index.css";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Header from "./components/header.jsx";

createRoot(document.getElementById("root")).render(
  <div>
    <Header />
    <App />
  </div>
);
