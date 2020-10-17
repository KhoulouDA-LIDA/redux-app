import { INCREMENTER } from "./types";
export const incrementer = () => {
    return(
        {
            type: INCREMENTER,
            payload: 1,
        }
        
    )
}