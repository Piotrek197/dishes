import { useDispatch, useSelector } from "react-redux";
import { changeNumberOfSlices, changeDiameter, selectDish} from "../../../slices/dishSlice";
import { handleOnBlurNumberOfSlices, handleOnBlurDiameter, selectErrors } from "../../../slices/errorsSlice";

const PizzaFields = () => {
  const dispatch = useDispatch();
  const {no_of_slices, diameter} = useSelector(selectDish);
  const errors = useSelector(selectErrors);


    return ( 
      <>
        <div>
          <label htmlFor="no-of-slices">Number of slices</label>
          <div className="input">
            <div className={"error-message" + ( errors.no_of_slices ? " error-message--active" : "")}>
                {errors.no_of_slices}
            </div>
            <input 
              type="number"
              id="no-of-slices"
              value={no_of_slices}
              onChange={e => dispatch(changeNumberOfSlices(Number(e.target.value)))}
              onBlur={ e => dispatch(handleOnBlurNumberOfSlices(Number(e.target.value)))}
              min="1"
              max="10"
            />
          </div>
        </div>
      
        <div>
          <label htmlFor="diameter">Diameter</label> 
          <div className="input">
            <div className={"error-message" + ( errors.diameter ? " error-message--active" : "")}>
                {errors.diameter}
            </div>
            <input
              type="number"
              id="diameter"
              value={diameter}
              onChange={e => dispatch(changeDiameter(Number(e.target.value)))}
              onBlur={ e => dispatch(handleOnBlurDiameter(Number(e.target.value)))}
              min="1"
              max="100"
              step="0.1"
            />
          </div>
        </div>
      </>  );
}
 
export default PizzaFields;