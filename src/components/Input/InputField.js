import "./style.css";

export function InputField ({setValue, label}) {
    // need to set values of components
    return (
        <>
            <div className="input--wrapper">
                <span className="input--label">{label}</span>
                <input className = "input--field" onChange={(e) => setValue(e.target.value)}/>
            </div>
        </>
    )
}