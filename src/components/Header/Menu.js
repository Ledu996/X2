import { useNavigate } from "react-router-dom"


export function Menu () {
     const navigate = useNavigate();

    return (
        
        <div className="header--navigation">
            <button className="nav--btn" onClick={() => navigate("/")} >Home</button>
            <button className="nav--btn" onClick={() => navigate("/about")}>About</button>
            <button className="nav--btn contact" onClick={() => navigate("/contact")}>Contact</button>
        </div>
    )
};