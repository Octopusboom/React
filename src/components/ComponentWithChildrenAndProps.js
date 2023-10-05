import React from "react";

const ComponentWithChildrenAndProps = ({title, children}) => {
    return (
        <>
        <h1>{title}</h1>
        <div>{children}</div>
        </>
    );
}

export default ComponentWithChildrenAndProps;