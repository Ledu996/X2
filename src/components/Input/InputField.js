import "./style.css";

export function InputField (props) {
    // need to set values of components
    return (
        <>
            <div className="input--wrapper">
                <span className="input--label">{props.label1}</span>
                <input className = "input--field" onChange={(e) => props.set1(e.target.value)}/>
            </div>
            <div className="input--wrapper">
                <span className="input--label">{props.label2}</span>
                <input className = "input--field" onChange={(e) => props.set2(e.target.value) } />
            </div>
        </>
    )
}