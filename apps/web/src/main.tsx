// import '@repo/ui/globals.css'
import "./globals.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";

ReactDOM.createRoot(document.getElementById("app") as HTMLDivElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
