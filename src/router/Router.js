import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Contact } from "../pages/Contact";

export function Router () {
    return (
        <BrowserRouter>
            <Routes>
                <Route element = {<Home/>} path = "/" exact/>
                <Route element = {<div>About</div>} path = "/about" exact/>
                <Route element = {<Contact />} path="/contact" exact />
            </Routes>
        </BrowserRouter>
    )
};