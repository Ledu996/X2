// import service for date formatting
import { useState } from "react";
import Edit from "../../images/edit.png";
import Delete from "../../images/delete.png";
import Calendar from "../../images/calendar.png";

export function Item (props) {
    // destructure properties
    // create state for tracing is edit mode on or off
    // pass the state of title and body when we want to update
    const [editTitle, setEditTitle] = useState(props.title);
    const [editBody,  setEditBody] = useState(props.body);
    const [isEditMode, setIsEditMode] = useState(false);
    console.log(editTitle);
    const itemStyle = {
        image: {
            width: '30px',
            height: '30px'
        },
        margin: '10px',
        maxWidth: '250px'
    }
    return (
        <form className="item--container" key={props.key} style={itemStyle} onSubmit={(e) => {
            e.preventDefault();
            console.log('This is an id of the element ', e.target.id);
            props.updateItem(props.id /*{updatedTitle: editTitle, updatedBody: editBody}*/);
            setIsEditMode(false);
        }}>
            <div className="icon--wrapper">
                <img 
                  src= {Edit} 
                  alt = "edit" 
                  style={itemStyle.image} 
                  onClick={() => {setIsEditMode(true);}} 
                  />
                <img 
                  src= {Delete} 
                  alt = "delete" 
                  style={itemStyle.image} 
                  onClick={() => {props.removeItem(props.id)}}
                  />
            </div>
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
                <span><img src = {Calendar} alt = "calendar" style={itemStyle.image}/>{`Date: ${Date.now()}`}</span>
            </div>
        </form>
    )
};

// when I try to group multiple inputs in one fragment, form does call onSubmit