import { useState } from "react"
import { formatDate } from "../../helpers/formatDate"
import { InputField } from "../Input/InputField";
// import { postData } from "../../services/dataService";

export function CreateItem ({items, setItems}) {
    // add div to inputs, cause position adjustments
    const createItemStyles = {
        /*wrapper: {
            display: 'flex',
            position: 'relative',
            padding: '35px ',
            top: '-30px',
            zIndex: '0',
        },*/
        
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
    
    const createItem = () => {
        setItems([...items, {id: items.length++, title: title, body: body, date: formatDate(new Date())}])
    }
    // do we change the item state or we, make a API call
    return (
        <div className="create--wrapper">
            <InputField setValue = {setTitle} label = {"title"} />
            <InputField setValue = {setBody} label = {"body"} />   
            <button style={createItemStyles.button} onClick = {async () => {
                // this is a fake request, will not update the database
                //await postData(createItem());
                createItem();
            }}>Create</button>
        </div>
    )
};