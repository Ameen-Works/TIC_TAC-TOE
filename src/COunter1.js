import React,{ useRef, useState} from "react";

function Counter(){
    let ref= useRef(0);
    let[val,setVal]=useState(ref.current);

     function handleClick(){
        ref.current=ref.current+1;
        // alert(`You clicked the counter ${ref.current} times...`);
        setVal(val=ref.current);
     }

    return(
        <div>Counter:
            <button onClick={handleClick}>Click me!!!</button>
            <p>${val}</p>
        </div>
    );
}
export default Counter;