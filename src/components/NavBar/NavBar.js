import  HamburgerMenu  from "../../assets/images/hamburger_menu.png";
import CloseIcon from "../../assets/images/close.png";
import { AdminLogo } from "../Logo/AminLogo";
import "./style.css";


export function NavBar ({isSideBarOpen, setSideBarOpen}) {
    return (
        <div className="navbar">
            <div className="hamburger--wrapper">
                <img 
                className = "hamburger--item" 
                src= { isSideBarOpen ? CloseIcon : HamburgerMenu } 
                alt = "logo"
                onClick={() => setSideBarOpen(prev => !prev)}
                />
            </div>
            <AdminLogo />
        </div>
    )
}