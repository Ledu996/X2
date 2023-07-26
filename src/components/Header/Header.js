import { Logo }  from "./Logo";
import { Menu } from "./Menu";
import "./style.css";

export function Header () {
    return (
        <header>
            <Logo />
            <Menu />
        </header>
    )    
}