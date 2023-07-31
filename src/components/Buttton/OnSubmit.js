import "./style.css";


export function OnSubmit ({text}) {
    return (
        <button type="submit" className="on--submit--btn">
            {text}
        </button>
    )
}; 