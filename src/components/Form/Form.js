import { useState } from "react";
// create a index script with all services inside
import { invalidEmailAlert, isEmptyAlert } from "../../services/swalService";
import { isEmpty, emailValidation } from "../../services/validationService";

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
        <div>
            <input onChange={(e) => setUserName(e.target.value)} />
            <input onChange={(e) => setEmail(e.target.value) } />
            <textarea onChange={(e) => setMessage(e.target.value) } />
            <button onClick={confirmData}>Submit</button>
            {displayMessage && <div>{`Thank you ${username} ${email} ${message}`}</div>}
        </div>
    )
}