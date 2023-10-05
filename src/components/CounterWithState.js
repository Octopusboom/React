import React, { useState } from "react";


const CounterWithState = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount (count + 1);
    }

    const handleDecrement = () => {
        setCount (count - 1);
    }

    return (
        <div>
            <h4>Counter: {count}</h4>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    );
}

export default CounterWithState;