import { useState } from "react"
import { formatDate } from "../../helpers/formatDate"
import { InputField } from "../Input/InputField";
// import { postData } from "../../services/dataService";

export function CreateItem ({items, setItems}) {
    // add div to inputs, cause position adjustments
    const createItemStyles = {
        wrapper: {
            display: 'flex',
            position: 'relative',
            padding: '35px ',
            top: '-30px',
            zIndex: '0',
        },
        inputWrapper : {
            position: 'relative',
        },
        inputLabel: {
            position: 'absolute',
            fontSize: '12px',
            top: '2px',
            left: '15px'
        },
        input: {
            padding: '15px',
            borderRadius: '20px',
            margin: '2px'
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
    
    const createItem = () => {
        setItems([...items, {id: items.length++, title: title, body: body, date: formatDate(new Date())}])
    }
    // do we change the item state or we, make a API call
    return (
        <div style={createItemStyles.wrapper}>
            <InputField 
              set1 = {setTitle} 
              set2 = {setBody} 
              label1 = {"title"}
              label2 = {"body"} 
              />
            {/*<div style={createItemStyles.inputWrapper}>
                <span style={createItemStyles.inputLabel}>Tittle</span>
                <input style = {createItemStyles.input} onChange={(e) => setTitle(e.target.value)}/>
            </div>
            <div style={createItemStyles.inputWrapper}>
                <span style={createItemStyles.inputLabel}>Body</span>
                <input style = {createItemStyles.input} onChange={(e) => setBody(e.target.value) } />
                </div>*/}
            <button style={createItemStyles.button} onClick = {async () => {
                // this is a fake request, will not update the database
                //await postData(createItem());
                createItem();
            }}>Create</button>
        </div>
    )
};