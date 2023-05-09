import { DishCategoryType } from "../../../types";
import "../Form.scss";

type PropsType = { type: DishCategoryType }

import PizzaFields from "./PizzaFields";
import SoupFields from "./SoupFields";
import SandwichFields from "./SandwichFields";

const FieldsFactory = ({type}: PropsType) => {
    return (
        <>
            {type === "pizza" ? <PizzaFields />
            : type === "soup" ? <SoupFields />
            : type === "sandwich" ? <SandwichFields />
            : ""}
        </> 
    );
}
 
export default FieldsFactory;