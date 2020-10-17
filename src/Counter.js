import React from 'react';
import {useSelector} from "react-redux";
import {decrementer} from "./actions/decrAction";
import {incrementer} from "./actions/incrAction";


const Counter = () => {
    const count = useSelector((state) => state.reducer)
    return(
        <div>
          <button onClick={()=>incrementer()}>Plus</button>
            <h1>{count}</h1>
          <button onClick={() => decrementer()} >Moins</button>
       </div>
    )
}
export default Counter;