import React, { useRef, useState, useReducer } from "react";

const initialState = {
    counterValue: 0,
    lastAction: null
};

const counterReducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return {
                counterValue: state.counterValue + 1,
                lastAction: "increment"
            };
        case "decrement":
            return {
                counterValue: state.counterValue - 1,
                lastAction: "decrement"
            };
        case "incrementByRandom":
            return {
                counterValue: state.counterValue + action.value,
                lastAction: "incrementByRandom"
            };
        default:
            return state;
    }
};
function CounterReducer() {
    const[state, dispatch]=useReducer(counterReducer,initialState);
    const{counterValue,lastAction}=state;

    return (
        <div>CounterReducer: {counterValue}
            <br/>
            <button onClick={()=>dispatch({type:"increment"})}>+ 1</button>
            <br/>
            <button onClick={()=>dispatch({type:"decrement"})}>- 1</button>
            <br/>
            <button onClick={()=>dispatch({type:"incrementByRandom", value:Math.floor(Math.random()*101)})}>+ IncrementByRandom</button>
        </div >
    );
}
export default CounterReducer;