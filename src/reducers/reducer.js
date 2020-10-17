import { DECREMENTER, INCREMENTER } from "../actions/types";
let count = 0;
const reducer = (state = count , action) => {
    switch (action.type) {
       case INCREMENTER:
           return (state + 1);
       case DECREMENTER:
           return (state - 1); 
       default:
           return state;      
    }
    return state;

}
export default reducer;