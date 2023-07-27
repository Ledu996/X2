import { BrowserRouter, Routes, Route } from "react-router-dom";
// naming convection, name of the files can also be named index.js, to avoid confusion
import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";
import { Contact } from "./pages/Contact/Contact";

function App() {
  return (
    <BrowserRouter>
            <Routes>
                <Route element = {<Home />} path = "/" exact/>
                <Route element = {<About />} path = "/about" exact/>
                <Route element = {<Contact />} path="/contact" exact />
            </Routes>
        </BrowserRouter>
  );
}

export default App;
