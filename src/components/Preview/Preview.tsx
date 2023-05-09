import InputPreview from "./InputPreview";
import "./Preview.scss";
import { DishType } from "../../types";

const Preview = ({result}: {result: DishType | null}) => {

    return ( 
        <section className="preview-container">
            <h2>Preview</h2>
            <InputPreview />
            <h3>Output</h3>
            <div className="output-preview">
                {JSON.stringify(result)}
            </div>
        </section> 
    );
}
 
export default Preview;