import { Logo }  from "./Logo";
import { NavBar } from "./NavBar";
import "./style.css";

export function Header () {
    return (
        <header>
            <Logo />
            <NavBar />
        </header>
    )    
}