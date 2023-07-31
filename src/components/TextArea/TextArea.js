import "./style.css";
export function TextArea ({setMessage}) {
    return (
        <div className="input--wrapper">
            <span className="input--label">Your question</span>
            <textarea className = "input--field area" onChange={(e) => setMessage(e.target.value) } />
        </div>
    )
};