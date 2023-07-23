import { Item } from "./Item";
import '../../pages/style.css';

// make a style for every component

export function ItemList ({items, updateItem, removeItem}) { // array as param and much more
    return (
        <div className="item--wrapper">
            {items.map(({id, title, body}, index) => (
            < Item 
                key = {index}
                title={title} 
                body={body} 
                id = {id} 
                updateItem = {updateItem} 
                removeItem = {removeItem}
                />
            ))}
        </div>
        
    )
}; 