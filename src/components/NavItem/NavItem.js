import "./style.css";

export function NavItem (props) {
    return (
        <div className="item--wrapper-nav" key = {props.key}>
                <img src = {props.icon} alt="none"/>
                <span>{props.text}</span>
            </div>
    )
} 