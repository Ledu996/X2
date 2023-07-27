import "./style.css";


export function EditInputs ({editTitle, editBody, setEditTitle, setEditBody}) { 
    return (
        <div className="edit--input--wrapper">
            <input className="edit--input-item" value = {editTitle} onChange = {(e) => setEditTitle(e.target.value) }/>
            <input className="edit--input-item" value = {editBody} onChange = {(e) => setEditBody(e.target.value) }/>
        </div>
    )
};