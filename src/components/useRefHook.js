import React, { useRef } from 'react';

const UseRefHook = () => {

    const imputRef = useRef(null);

    const handleFocus = () => {
        imputRef.current.focus();
    }

    return(
        <div>
            <input type="text" ref={imputRef} />
            <button onClick={handleFocus}>Focus the input</button>
        </div>
    );

}

export default UseRefHook;