import { useEffect, useState } from "react";
import { isUserAuthenticated } from "../../services/authService";
import { wrongCredentialsAlert } from "../../services/swalService"; 
import { InputField } from "../../components/Input/InputField";
import { Footer } from "../../components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import { OnSubmit } from "../../components/Buttton/OnSubmit";

export function Login () {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoogedIn, setLoogedIn] = useState(false);
    const navigate = useNavigate();
    
    const handleLogin = (e) => {
        e.preventDefault();
        
        if (!isUserAuthenticated(email, password)) {
            wrongCredentialsAlert();
            return;
        } 
        
        localStorage.setItem("user", JSON.stringify({email, password}))
        setLoogedIn(!isLoogedIn);
    };

    useEffect(() => {
        if(localStorage.getItem("user")){
            navigate("/home");
        }
    },[isLoogedIn])

    // need to add a button here
    return (
        <div className="login--wrapper">
            <form className = "login--form"  onSubmit={(e) => handleLogin(e)}>
                <h2>Login</h2>
                <InputField label={"email"} setValue={setEmail} />
                <InputField label={"password"} setValue={setPassword}/>
                <OnSubmit text = "Login"/>
            </form>
            <Footer />
        </div>
    )
}