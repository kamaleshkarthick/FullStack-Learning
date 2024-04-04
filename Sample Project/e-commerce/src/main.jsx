import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import SidebarProvider from "./context/SidebarContext.jsx";
import CardProvider from "./context/CardContext.jsx";
import ProductProvider from "./context/ProductContext.jsx";
// import Home from "./Page/Home.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SidebarProvider>
    <CardProvider>
    <ProductProvider>
    <App />
    {/* <Home/> */}
    </ProductProvider>
    </CardProvider>
    </SidebarProvider>
  </React.StrictMode>
);
