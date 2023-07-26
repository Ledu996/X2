// import service for date formatting
import { useState } from "react";
import { Actions } from "./Actions";
import Calendar from "../../images/calendar.png";


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
    const itemStyle = {
        image: {
            width: '30px',
            height: '30px'
        },
        margin: '10px',
        maxWidth: '250px'
    }
    
    return (
        <form className="item--container" key={props.key} style={itemStyle} onKeyDown={(e) => {
            handleSubmitForm(e);
        }}>
            <Actions id ={props.id} setIsEditMode={setIsEditMode} removeItem={props.removeItem} style = {itemStyle} />
            { // create separate component for creating new title and body
            isEditMode 
                ? 
                    
                    <>
                        <input value = {editTitle} onChange = {(e) => setEditTitle(e.target.value) }/>
                        <input value = {editBody} onChange = {(e) => setEditBody(e.target.value) }/>
                    </>
                :
                    <>
                        <h4>{props.title.toUpperCase()}</h4>
                        <div>{props.body}</div>
                    </>
            }
            <div className="date--container">
                <span><img src = {Calendar} alt = "calendar" style={itemStyle.image}/>{props.date}</span>
            </div>
        </form>
    )
};

// when I try to group multiple inputs in one fragment, form does call onSubmit
// try to create more separated components 