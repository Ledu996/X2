import { useState, useEffect } from "react"
import { Layout } from "../components/Layout/Layout";
import { ItemList } from "../components/Item/ItemList";
import { CreateItem } from "../components/Item/CreateItem";
import { getData } from "../services/dataService";
import "./style.css";

export function Home () {
    // either put all required components here or just a single component Similar name to home
    
    const [items, setItems] = useState([]);
    
    const updateItem = (id, updateItem) => {
        const {updatedTitle, updatedBody} = updateItem;
        setItems(items.map(item => {
         return item.id === id ? {...item, title: updatedTitle, body: updatedBody} : item;
        }))
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
               <CreateItem 
               items = {items} 
               setItems = {setItems}
               />
            </div>
        </Layout>
    )

};
