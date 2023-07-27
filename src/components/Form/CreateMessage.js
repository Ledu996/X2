import { InputField } from "../Input/InputField"

export function CreateMessage ({setUserName, setEmail, setMessage, confirmData}) { 
    
    return (
            <div className="form--content">
                <InputField 
                    set1 = {setUserName}
                    set2 = {setEmail}
                    label1 = {"username"}
                    label2 = {"email"}
                />
                {/*<div className="input--wrapper">
                    <span className="input--label">UserName</span>
                    <input className = "contact--input"onChange={(e) => setUserName(e.target.value)} />
                </div>
                <div className="input--wrapper">
                    <span className="input--label">Email</span>
                    <input className="contact--input" onChange={(e) => setEmail(e.target.value) } />
                </div>*/}
                <div className="input--wrapper">
                    <span className="input--label">Your question</span>
                    <textarea className = "contact--input text--area" onChange={(e) => setMessage(e.target.value) } />
                </div>
                <button className = "contact--form-button" onClick={confirmData}>Submit</button>
            </div>
    )
};