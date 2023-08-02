import { navItems } from "../../helpers/SideBarData";
import { NavItem } from "../NavItem/NavItem";
import "./style.css";

export function Sidebar ({isSideBarOpen}) {
    return (
        <div className={`sidebar ${isSideBarOpen ? 'active': '' }`  }>
            {
            navItems.map(({text, icon}, index) => 
                (<NavItem key = {index} text = {text} icon={icon} />)
            )}
        </div>
    )
}

// can make it one component 