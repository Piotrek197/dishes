import axios from "axios";
import {DishType, KeyType} from "./types";

const postRequest = async (url: string, input: DishType) => {

    const deleteFalsy =(acc: Record<string, KeyType>, key: keyof DishType) => {
                    
        if (input[key]) {
            acc[key] = input[key];
        }
        
        return acc;
    }
    
    try {
        
        const formattedData = Object.keys(input).reduce(deleteFalsy, {} as Record<string, KeyType>)

        const response = await axios.post(url, formattedData);
        return response.data;
        
    }catch(err){

        if(axios.isAxiosError(err)){
            return err.response?.data;
        }else {
            return "Unknown error";
        }
    }

}

export default postRequest;