// src/main.jsx

import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./styles/base.css";
import "./styles/nav.css";
import "./styles/header.css";
import "./styles/footer.css";
import "./styles/home.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/">
    <App />
  </BrowserRouter>,
);
