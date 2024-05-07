import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  BrowserRouter,
  Routes,
  Link,
} from "react-router-dom";
import Rootlayouts from "./Layouts/Rootlayouts";
import Home from "./Screens/Home";
import About from "./Screens/About";
import Contact from "./Screens/Contact";
import Navbar from "./Components/Navbar";
import Contactlayout from "./Layouts/Contactlayout";
import Mail from "./Screens/Mail";
import Phone from "./Screens/Phone";
import Dashboardlayout from "./Layouts/Dashboardlayout";
import Product, { Productloader } from "./Screens/Product";
import ProductDetail, { Productitem } from "./Screens/ProductDetail";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Rootlayouts />}>
      <Route index element={<Home />} />
      <Route path="About" element={<About />} />
      {/* <Route path="About" element={<Contact />} /> */}

      {/* Nested Routing */}
      <Route path="Contact" element={<Contactlayout />}>
        <Route
          index
          element={
            <>
              <h1>
                when parent rounte render then "index" keyword to initialize the
                component
              </h1>
              <Link to="mail">Mail</Link>
              <br />
              <Link to="Phone">Phone No</Link>
            </>
          }
        />
        <Route path="mail" element={<Mail />} />
        <Route path="phone" element={<Phone />} />
      </Route>

      {/* Api calling */}
      <Route path="dashboard" element={<Dashboardlayout />}>
        <Route index element={<Product />} loader={Productloader} errorElement={<><h2>Something went wrong</h2> </>} />
        <Route path="product/:id"  element={<ProductDetail/>} loader={Productitem} errorElement={<> <h3> Id id not coming</h3></>} />
      </Route>

      {/* Page Not Found */}
      <Route
        path="*"
        element={
          <>
            <h1>Page is Not found</h1>
            <h2>
              <Link to="/">Go back to home</Link>
            </h2>
          </>
        }
      />
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
