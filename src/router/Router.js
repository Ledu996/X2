import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";

export function Router () {
    return (
        <BrowserRouter>
            <Routes>
                <Route element = {<Home/>} path = "/" exact/>
                <Route element = {<div>About</div>} path = "/about" exact/>
            </Routes>
        </BrowserRouter>
    )
};