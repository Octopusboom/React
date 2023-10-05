import React, { useState, useEffect } from 'react';

const CounterWithStateAndUseEffect = () => {

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("tomato");

    useEffect(()=>{
        console.log(`Counter: ${count}`);
        console.log(`Color is now: ${color}`);
    }, [count, color]);
    
    return(
        <div>
            <p>You clicked {count} times.</p>
            <button onClick={() => setCount (count + 1)}>Click me</button>
            <button onClick={() => setColor ("blue")}>Chnage color</button>
        </div>
    );
}

export default CounterWithStateAndUseEffect;