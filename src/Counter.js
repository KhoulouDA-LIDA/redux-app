import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {decrementer} from "./actions/decrAction";
import {incrementer} from "./actions/incrAction";


const Counter = () => {
    const count = useSelector((state) => state.reducer)
    const dispatch =useDispatch()
    return(
        <div>
          <button onClick={()=>dispatch(incrementer())}>Plus</button>
            <h1>{count}</h1>
          <button onClick={() => dispatch(decrementer())} >Moins</button>
       </div>
    )
}
export default Counter;