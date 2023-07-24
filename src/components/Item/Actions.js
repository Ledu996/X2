import Edit from "../../images/edit.png";
import Delete from "../../images/delete.png";
import {deleteConfirmationAlert} from "../../services/swalService";

export function Actions ({setIsEditMode, removeItem, id, style}) {
    
  const deleteItem = async () => {
      const result = await deleteConfirmationAlert(id);
      if (result.isConfirmed) {
        removeItem(id)
      }
    };

    return (
        <div className="icon--wrapper">
                <img 
                  src= {Edit} 
                  alt = "edit" 
                  style={style.image} 
                  onClick={() => {setIsEditMode(true);}} 
                  />
                <img 
                  src= {Delete} 
                  alt = "delete" 
                  style={style.image} 
                  onClick={() => {
                    deleteItem();
                    
                  }}
                  />
            </div>
    )
};