import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";

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
