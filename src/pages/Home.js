import { useState, useEffect } from "react"
import { Layout } from "../components/Layout/Layout";
import { ItemList } from "../components/Item/ItemList";
import { CreateItem } from "../components/Item/CreateItem";
import { getData } from "../services/dataService";
import { formatDate } from "../helpers/formatDate";

export function Home () {
        
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
                setItems(result.map(e => ({...e, date: formatDate(new Date ())})))
                console.log(items);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <Layout>
            <ItemList 
              items = {items} 
              updateItem = {updateItem} 
              removeItem = {removeItem}
            />
            <CreateItem 
               items = {items} 
               setItems = {setItems}
            />
        </Layout>
    )

};
