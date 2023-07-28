import { useState } from "react"
import { formatDate } from "../../helpers/formatDate"
import { InputField } from "../Input/InputField";
import { OnSubmit } from "../Buttton/OnSubmit";
// import { postData } from "../../services/dataService";

export function CreateItem ({items, setItems}) {
    
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    
    const createItem = (e) => {
        e.preventDefault();
        setItems([...items, {id: items.length++, title: title, body: body, date: formatDate(new Date())}])
    }
    // do we change the item state or we, make a API call
    return (
        <form className="create--wrapper" onSubmit={(e) => createItem(e) }>
            <InputField setValue = {setTitle} label = {"title"} />
            <InputField setValue = {setBody} label = {"body"} />
            <OnSubmit />   
        </form>
    )
};