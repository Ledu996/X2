import { useState } from "react"
// import { postData } from "../../services/dataService";


import "./style.css";

export function CreateItem ({items, setItems}) {
    // add div to inputs, cause position adjustments
    const createItemStyles = {
        wrapper: {
            position: 'relative',
            padding: '3px ',
            top: '-30px',
            zIndex: '0',
        },
        input: {
            padding: '10px',
            borderRadius: '20px'
        },
        button: {
            padding: '20px',
            borderRadius: '12px',
            background: 'black',
            color: '#fff',
            border: 'none',
            cursor: 'pointer'
        }
    }
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    console.log(new Date().toUTCString());
    const createItem = () => {
        setItems([...items, {id: items.length++, title: title, body: body, date: new Date().toUTCString()}])
    }
    // do we change the item state or we, make a API call
    return (
        <div style={createItemStyles.wrapper}>
            <input style = {createItemStyles.input} onChange={(e) => setTitle(e.target.value)}/>
            <input style = {createItemStyles.input} onChange={(e) => setBody(e.target.value) } />
            <button style={createItemStyles.button} onClick = {async () => {
                // this is a fake request, will not update the database
                //await postData(createItem());
                createItem();
            }}>Create</button>
        </div>
    )
};