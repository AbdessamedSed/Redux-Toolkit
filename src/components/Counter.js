import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementAction, decrementAction, incrementByValue } from "../redux/actions/counterActions";

export default function Counter() {
    const countState = useSelector(state => state.counter);
    const dispatch = useDispatch();

    const handleIncrement = () => {
        //setCount(count + 1);
        incrementAction(dispatch);
    }

    const handleDecrement = () => {
        //setCount(count - 1);
        decrementAction(dispatch);
    }

    const handleIncByValue = (v1) => {
        incrementByValue(v1, dispatch);
    }

    return (
        <div>
            <p>{countState.count}</p>
            <button onClick={handleIncrement}> Increment </button>
            <button onClick={handleDecrement}> Decrement </button>
            <button onClick={() => handleIncByValue(4)}> Increment By Value </button>
        </div>
    )
}