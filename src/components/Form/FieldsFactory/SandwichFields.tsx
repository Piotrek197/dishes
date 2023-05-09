import { useDispatch, useSelector } from "react-redux";
import { changeSlicesOfBread, selectDish} from "../../../slices/dishSlice";
import { handleOnBlurSlicesOfBread, selectErrors } from "../../../slices/errorsSlice";

const SandwichFields = () => {

  const dispatch = useDispatch();
  const { slices_of_bread } = useSelector(selectDish);
  const errors = useSelector(selectErrors);

    return ( 
      <>
        <div>
          <label htmlFor="slices-of-bread">Slices of bread</label>
          <div className="input">
            <div className={"error-message" + (errors.slices_of_bread ? " error-message--active" : "")}>
                {errors.slices_of_bread}
            </div>
            <input
              type="number"
              id="slices-of-bread"
              value={slices_of_bread}
              onChange={e => dispatch(changeSlicesOfBread(Number(e.target.value)))}
              onBlur={ e => dispatch(handleOnBlurSlicesOfBread(Number(e.target.value)))}
              min="1"
              max="100"
            />
          </div>
        </div>
      </> );
}
 
export default SandwichFields;