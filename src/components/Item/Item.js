// import service for date formatting
import { useState } from "react";
import { Actions } from "../Actions/Actions";
import Calendar from "../../assets/images/calendar.png";
import "./style.css";
import { EditInput } from "../Input/EditInput";
import { OnSubmit } from "../Buttton/OnSubmit";


export function Item (props) {
    const [editTitle, setEditTitle] = useState(props.title);
    const [editBody,  setEditBody] = useState(props.body);
    const [isEditMode, setIsEditMode] = useState(false);
    
    const handleSubmitForm = (e) => {
            e.preventDefault();
            props.updateItem(props.id, {updatedTitle: editTitle, updatedBody: editBody});
            setIsEditMode(false);
    }
    
    return (
        <div className="item--container" key={props.key}>
            <Actions 
              id ={props.id} 
              setIsEditMode={setIsEditMode} 
              removeItem={props.removeItem}
            />
            {

            isEditMode 
                ? 
                <form onSubmit={(e) => {handleSubmitForm(e)}}>
                    <EditInput value= {editTitle} setEditValue={setEditTitle}/>
                    <EditInput value = {editBody} setEditValue={setEditBody}/>
                    <OnSubmit text = {"Edit"}/>
                </form>
                    
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
        </div>
    )
};

// when I try to group multiple inputs in one fragment, form does call onSubmit
// try to create more separated components 

