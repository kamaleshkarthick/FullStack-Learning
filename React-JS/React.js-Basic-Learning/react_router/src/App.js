import { Route, Routes } from "react-router-dom";
import NavBar from "./Component/navBar";
import Home from "./Component/Home";
import Products from "./Component/products";
import Posts from "./Component/Posts";
import Dashboard from "./Component/Admin/dashboard";

function App() {
  return (
    <>
      <NavBar />
      <div>
        <Routes>
          {/* <Route path="/"  /> */}
          <Route path="/" element={<Home />} />
          <Route path="/Products" element={<Products/>} />
          <Route path="/posts" element={<Posts/>} />
          <Route path="/admin/dashboard" element={<Dashboard/>} />
          {/* <Route path='/' Component={Home}/> */}
        </Routes>
      </div>
    </>
  );
}

export default App;
