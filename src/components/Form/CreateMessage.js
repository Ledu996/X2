import { InputField } from "../Input/InputField"

export function CreateMessage ({setUserName, setEmail, setMessage, confirmData}) { 
    
    return (
            <div className="form--content">
                <InputField 
                    setValue={setUserName}
                    label = {"username"}
                />
                <InputField 
                  setValue={setEmail} 
                  label={"email"}
                />
    
                <div className="input--wrapper">
                    <span className="input--label">Your question</span>
                    <textarea className = "contact--input" onChange={(e) => setMessage(e.target.value) } />
                </div>
                <button className = "contact--form-button" onClick={confirmData}>Submit</button>
            </div>
    )
};