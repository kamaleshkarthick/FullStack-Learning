import createBrowserRouter, { createRoutesFromElements, Route } from "react-router-dom";
import Rootlayout from "../Layout/Rootlayout";
import About from "../Screen/About";
import Home from "../Screen/Home";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Rootlayout />}>
            <Route index element={<Home/>}/>
            <Route path="About" element={<About />}/>

        </Route>
    )
)

export default router