import { useDispatch, useSelector } from "react-redux";
import { changeSpicinessScale, selectDish} from "../../../slices/dishSlice";
import { handleOnBlurSpicinessScale } from "../../../slices/errorsSlice";

const SoupFields = () => {

    const dispatch = useDispatch();
    const { spiciness_scale } = useSelector(selectDish);


    return ( 
    
        <>
            <div>
                <label htmlFor="spiciness-scale">Spiciness scale</label>
                <input
                    type="range"
                    id="spiciness-scale"
                    value={spiciness_scale}
                    onChange={e => dispatch(changeSpicinessScale(Number(e.target.value)))}
                    onBlur={ e => dispatch(handleOnBlurSpicinessScale(Number(e.target.value)))}
                    min="1"
                    max="10"
                />
            </div>
      </> 
    );
}
 
export default SoupFields;