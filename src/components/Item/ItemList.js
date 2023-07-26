import { Item } from "./Item";
import "./style.css";

export function ItemList ({items, updateItem, removeItem}) {
    return (
        <>
        {
            !items.length 
            ? 
                <div>{"No Items"}</div>
            :
                <div className="item--wrapper">
                    {items.map(({id, title, body, date}, index) => (
                        <Item 
                          key = {index}
                          title={title} 
                          body={body}
                          date = {date}
                          id = {id} 
                          updateItem = {updateItem} 
                          removeItem = {removeItem}
                        />
                    ))}
                </div>
        }
        </>
    )
}; 