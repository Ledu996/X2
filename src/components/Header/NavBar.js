import { useNavigate } from "react-router-dom"


export function NavBar () {
    const navigate = useNavigate();
    return (
        
        <div className="header--navigation">
            <button className="nav--btn" onClick = {() => {navigate("/")}}>Home</button>
            <div className="nav--btn" onClick = {() => {navigate("/about")}}>About</div>
            <div className="nav--btn contact" onClick={() => {navigate("contact")}}>Contact</div>
        </div>
    )
};