import { useState } from "react"
// import { postData } from "../../services/dataService";


export function CreateItem ({items, setItems}) {
    // add div to inputs, cause position adjustments

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    console.log(new Date().toUTCString());
    const createItem = () => {
        setItems([...items, {id: items.length++, title: title, body: body, date: new Date().toUTCString()}])
    }
    // do we change the item state or we, make a API call
    return (
        <div>
            <input onChange={(e) => setTitle(e.target.value)}/>
            <input onChange={(e) => setBody(e.target.value) } />
            <button onClick = {async () => {
                // this is a fake request, will not update the database
                //await postData(createItem());
                createItem();
            }}>Create</button>
        </div>
    )
};