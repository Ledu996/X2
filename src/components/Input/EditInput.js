export function EditInput ({value, setEditValue}) {

    return (
        <div className="edit--input--wrapper">
            <input 
              className="edit--input-item" 
              value = {value} onChange = {(e) => setEditValue(e.target.value) }
            />
        </div>
    )
} 