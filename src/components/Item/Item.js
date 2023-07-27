// import service for date formatting
import { useState } from "react";
import { Actions } from "./Actions";
import { EditInputs } from "./EditInputs";
import Calendar from "../../assets/images/calendar.png";
import "./style.css";


export function Item (props) {
    // destructure properties
    // create state for tracing is edit mode on or off
    // pass the state of title and body when we want to update
    const [editTitle, setEditTitle] = useState(props.title);
    const [editBody,  setEditBody] = useState(props.body);
    const [isEditMode, setIsEditMode] = useState(false);
    
    const handleSubmitForm = (e) => {
        // check if user press Enter 
        if(e.key === 'Enter') {
            e.preventDefault();
            props.updateItem(props.id, {updatedTitle: editTitle, updatedBody: editBody});
            setIsEditMode(false);
        }
    }
    
    return (
        <form className="item--container" key={props.key}  onKeyDown={(e) => {
            handleSubmitForm(e);
        }}>
            <Actions 
              id ={props.id} 
              setIsEditMode={setIsEditMode} 
              removeItem={props.removeItem}
            />
            {

            isEditMode 
                ? 
                    <EditInputs
                      editTitle={editTitle}
                      editBody={editBody}
                      setEditTitle={setEditTitle}
                      setEditBody={setEditBody}
                    />
                :
                    <div className = "item--content--wrapper">
                        <h4 className="item--heading">{props.title.toUpperCase()}</h4>
                        <p className="item--text">{props.body}</p>
                    </div>
            }
            <div className="date--container">
            <img src = {Calendar} alt = "calendar" className="image--icon-item"/>
                <span>{props.date}</span>
            </div>
        </form>
    )
};

// when I try to group multiple inputs in one fragment, form does call onSubmit
// try to create more separated components 