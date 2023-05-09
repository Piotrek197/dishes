import { useRef, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';

import { selectDish, changeType, changeName, changePreparationTime } from '../../slices/dishSlice';
import { handleOnBlurName, handleOnBlurPreparationTime, handleOnBlurType, selectErrors } from "../../slices/errorsSlice";

import FieldsFactory from "./FieldsFactory/FieldsFactory";

import { DishCategoryType, DishType } from "../../types";
import postRequest from '../../postRequest';

import "./Form.scss";

const Form = ({setResult}: {setResult: React.Dispatch<React.SetStateAction<DishType | null>>}) => {

    const dispatch = useDispatch();
    const dish = useSelector(selectDish);
    const errors= useSelector(selectErrors);
    const nameInputRef = useRef<HTMLInputElement>(null);

    const url = "https://umzzcc503l.execute-api.us-west-2.amazonaws.com/dishes/";

    const handleSubmit = async () => {
        const response = await postRequest(url, dish); //{name: "super zupka", type: "pizza", preparation_time: "01:00:00", no_of_slices: 1, diameter: 22.00}

        setResult(response.data);
        console.log("response", response);
    }

    useEffect(() => {
        nameInputRef.current?.focus();
    }, [])


    return ( 
        <section className="form-container">
            <h1 role="header">Add Dish</h1>
            <form onSubmit={e => e.preventDefault()}>
            
            <div>
                <label htmlFor="name">Dish name</label>
                <div className="input">
                    <div className={"error-message" + (errors.name ? " error-message--active" : "")}>
                        {errors.name}
                    </div>
                    <input
                    type="text"
                    id="name"
                    className={!errors.name ? "correct" : ""}
                    role="dish-name"
                    value={dish.name}
                    onChange={e => dispatch(changeName(e.target.value))}
                    onBlur={e => dispatch(handleOnBlurName(e.target.value))}
                    onFocus={() => {}}
                    ref={nameInputRef}
                    required
                    />
                </div>
            </div>

            <div>
                <label htmlFor="preparation-time">Preparation time</label>
                <div className="input">
                    <div className={"error-message" + ( errors.preparation_time ? " error-message--active" : "")}>
                        {errors.preparation_time}
                    </div>
                <input
                type="text"
                id="preparation-time"
                role="preparation-time"
                value={dish.preparation_time}
                pattern="[0-9]{2}:[0-9]{2}:[0-9]{2}"
                placeholder="00:00:00"
                onChange={e => dispatch(changePreparationTime(e.target.value))}
                onBlur={ e => dispatch(handleOnBlurPreparationTime(e.target.value))}
                required
                />
                </div>
            </div>

            <div>
                <label htmlFor="type">Dish type</label>
                <div className="input">

                    <div className={"error-message" + ( errors.type ? " error-message--active" : "")}>
                        {errors.type}
                    </div>
                    <select
                        id="type"
                        role="dish-type"
                        onChange={e => { 
                            dispatch(changeType(e.target.value as DishCategoryType))
                            dispatch(handleOnBlurType(e.target.value))
                        }}
                        required
                    >
                        <option value="">Please choose a dish type</option>
                        <option value="pizza">Pizza</option>
                        <option value="soup">Soup</option>
                        <option value="sandwich">Sandwich</option>
                    </select>
                </div>
            </div>

            <FieldsFactory type={dish.type} />

            <button
            type="submit"
            id="submit"
            role="submit-dish"
            onClick={handleSubmit}
            >Submit</button>

        </form>
    </section>
    );
}

// const ErrorMessage = ({message})
 
export default Form;