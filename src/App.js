import { BrowserRouter, Routes, Route } from "react-router-dom";
// naming convection, name of the files can also be named index.js, to avoid confusion
import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";
import { Contact } from "./pages/Contact/Contact";
import { Login } from "./pages/Login/Login";
import { Admin } from "./pages/Admin/Admin";

function App() {
  return (
    <BrowserRouter>
            <Routes>
                <Route element = {<Login />} path = "/login" exact/>
                <Route element = {<Login />} path = "/" exact/>
                <Route element = {<Home />} path = "/home" exact/>
                <Route element = {<About />} path = "/about" exact/>
                <Route element = {<Contact />} path="/contact" exact />
                <Route element = {<Admin />} path="/admin" exact />

            </Routes>
        </BrowserRouter>
  );
}

export default App;
