import { useState, useEffect } from "react"
import { Layout } from "../../components/Layout/Layout";
import { ItemList } from "../../components/Item/ItemList";
import { CreateItem } from "../../components/Item/CreateItem";
import { getData } from "../../services/dataService";
import { formatDate } from "../../helpers/formatDate";
import "./style.css";

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
                // date is missing in jsonPlaceHolder so I added it to the items array, in specific format
                // because of that first 100 items will have the same date, because of fetching
                setItems(result.map(e => ({...e, date: formatDate(new Date ())})))
                console.log(items);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <Layout>
            <div className = "home--wrapper">
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
