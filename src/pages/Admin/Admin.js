import { useState } from "react";
import { NavBar } from "../../components/NavBar/NavBar";
import { Sidebar } from "../../components/SideBar/SideBar";
import "./style.css";

export function Admin () {
    const [isSideBarOpen, setSideBarOpen] = useState(false);
    return (
        <div className="main--wrapper-admin">
            <NavBar 
              isSideBarOpen = {isSideBarOpen} 
              setSideBarOpen = {setSideBarOpen}
            />
            <div className="content--wrapper-admin">
                <Sidebar isSideBarOpen = {isSideBarOpen} />
                <div style = {{background: "#000", flexGrow: 2}}></div>
            </div>
        </div>
    )
}