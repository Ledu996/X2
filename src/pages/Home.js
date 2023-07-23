import { useState, useEffect } from "react"
import { Layout } from "../components/Layout/Layout";
import { ItemList } from "../components/Item/ItemList";
import { CreateItem } from "../components/Item/CreateItem";
import { getData } from "../services/dataService";
import "./style.css";

export function Home () {
    // either put all required components here or just a single component Similar name to home
    // import custom hooks and also, use useEffect to fetch the required data
    // useItemData(items[], setItems, createItem({id, title, content, date }), removeItem(id), editItem(id))    
    
    const [items, setItems] = useState([]);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    
    // save editTitle, editBody to state
    // create separated service for getting and posting data
    const createItem = () => {};
    
    const updateItem = (id) => { // one more param to update {title, content}
        // const {updatedTitle, updatedBody} = updateItem;
        setItems(items.map(item => {
         return item.id === id ? {...item, title: 'updatedTitle', body: 'updatedBody'} : item;
        }))
        // setItems(updateItem);
    };
    const removeItem = (id) => {
        const filteredArray = items.filter((item) => item.id !== id);
        setItems(filteredArray);
    };
    
    useEffect(() => {
            getData()
            .then(result => {
                setItems(result)
            })
            .catch(err => console.log(err));
            
        // call axios function for getting elements
        // call setItems() function to set all the elements in the array
    }, []);
    // inside ItemsList provide props: items, editItem(), removeItem() and id of the element
    return (
        <Layout>
            <div className = "content--wrapper">
               <ItemList 
                    items = {items} 
                    updateItem = {updateItem} 
                    removeItem = {removeItem}
                />
               <CreateItem />
            </div>
        </Layout>
    )

};


// create custom hooks for axios and also a hook related to Items