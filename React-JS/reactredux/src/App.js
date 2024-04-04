import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import Rootlayouts from "./Layouts/Rootlayouts";
import Home from "./Screens/Home";
import About from "./Screens/About";
import Contact from "./Screens/Contact";
import Navbar from "./Components/Navbar";
import Contactlayout from "./Layouts/Contactlayout";
import Mail from "./Screens/Mail";
import Phone from "./Screens/Phone";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Rootlayouts />}>
      <Route index element={<Home />} />
      <Route path="About" element={<About />} />
      <Route path="Contact" element={<Contactlayout />} >
        <Route path="mail" element={<Mail/>} />
        <Route path="phone" element={<Phone/>}/>
      </Route>
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />

      {/* <BrowserRouter>
        <h1>----------------</h1>
        <Navbar />
        <Routes>
          <Route path="/" element={<Rootlayouts />}>
            <Route index element={<Home />} />
            <Route path="About" element={<About />} />
            <Route path="Contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;
