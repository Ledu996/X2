import { useState } from "react";
// create a index script with all services inside
import { invalidEmailAlert, isEmptyAlert } from "../../services/swalService";
import { isEmpty, emailValidation } from "../../services/validationService";
import { CreateMessage } from "./CreateMessage";
import { ThanksMessage } from "./ThanksMessage";

export function Form () {
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [displayMessage, setDisplayMessage] = useState(false);
    // state with boolean value to approve a message
    
    const confirmData = async () => {
        if(isEmpty(username) || isEmpty(email) || isEmpty(message)) {
            await isEmptyAlert();
            return;
        }
        if (!emailValidation(email)) {
            await invalidEmailAlert();
            return;
        }
        setDisplayMessage(true);
    }
    return (
        <div style = {{display: "flex"}}>
            <CreateMessage
                setUserName = {setUserName}
                setEmail = {setEmail}
                setMessage = {setMessage}
                confirmData = {confirmData}
            />
            {
            displayMessage && 
                <ThanksMessage 
                  username = {username}
                  email = {email} 
                  message = {message}
                /> 
            }
        </div>
    )
}