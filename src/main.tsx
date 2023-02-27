import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

//esse ! no final garante ao TSX que o elemento existe sim (é tipo um "confia em mim, esse elemento VAI estar em tela", como diz o Diego Fernandes)
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
