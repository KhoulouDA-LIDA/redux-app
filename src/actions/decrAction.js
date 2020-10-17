import {DECREMENTER} from './types';
export const decrementer = () =>{
    return(
        {
            type: DECREMENTER,
            payload: 1,
        }
    )
}