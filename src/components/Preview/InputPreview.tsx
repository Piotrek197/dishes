import { useSelector } from "react-redux";
import { selectDish } from "../../slices/dishSlice";
import { DishType, KeyType } from "../../types";

const InputPreview = () => {
        
    const dish = useSelector(selectDish);

    const deleteFalsy =(acc: Record<string, KeyType>, key: keyof DishType) => {
                    
        if (dish[key]) {
            acc[key] = dish[key];
        }

        return acc;

    }
    
    return ( 

        <>
            <h3>Input</h3>
        
            <div className="input-preview">
                { JSON.stringify(Object.keys(dish)
                    .reduce(deleteFalsy, {} as Record<string, KeyType>))
                }
            </div>

        </> 
    );
}
 
export default InputPreview;