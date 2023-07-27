import Edit from "../../assets/images/edit.png";
import Delete from "../../assets/images/delete.png";
import {deleteConfirmationAlert} from "../../services/swalService";

export function Actions ({setIsEditMode, removeItem, id}) {
    
  const deleteItem = async (id) => {
      const result = await deleteConfirmationAlert(id);
      if (result.isConfirmed) {
        removeItem(id)
      }
    };

    return (
        <div className="icon--wrapper">
          <img className= "image--icon-item"
            src= {Edit} 
            alt = "edit" 
            onClick={() => {setIsEditMode(prev => !prev);}} 
          />
          <img className = "image--icon-item"
            src= {Delete} 
            alt = "delete" 
            onClick={() => {
                deleteItem(id);
            }}
          />
        </div>
    )
};