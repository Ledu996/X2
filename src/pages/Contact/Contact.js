import { useState } from "react";
import { invalidEmailAlert, isEmptyAlert } from "../../services/swalService";
import { isEmpty, emailValidation } from "../../services/validationService";
import { InputField } from "../../components/Input/InputField";
import { TextArea } from "../../components/TextArea/TextArea";
import { ThanksMessage } from "../../components/Message/ThanksMessage";
import { Layout } from "../../components/Layout/Layout";
import "./style.css";
import { OnSubmit } from "../../components/Buttton/OnSubmit";


export function Contact () {
    // import all states, helpers and services for contact
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [displayMessage, setDisplayMessage] = useState(false);

    const confirmData =  (e) => {
        e.preventDefault();
        if(isEmpty(username) || isEmpty(email) || isEmpty(message)) {
            isEmptyAlert();
            return;
        }
        if (!emailValidation(email)) {
            invalidEmailAlert();
            return;
        }
        setDisplayMessage(prev => !prev);
    }

    // add buttons
    return (
        <Layout>
            <div className="contact--wrapper">
                {displayMessage 
                ? 
                <ThanksMessage username={username} email={email} message={message}/> 
                :
                <form className="contact--form" onSubmit={(e) => confirmData(e)}>
                    <h2>Send Us A Message</h2>
                    <InputField label={"username"} setValue={setUserName} />
                    <InputField label={"email"} setValue={setEmail} />
                    <TextArea setMessage={setMessage} />
                    <OnSubmit />
                </form>
                }
            </div>
        </Layout>
    )
}

