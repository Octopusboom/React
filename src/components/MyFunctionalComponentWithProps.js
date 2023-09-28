import React from 'react';


const MyFunctionalComponentWithProps = ({name, age, hairColor}) => {
    return (
        <div className="container">
            <p>Hello my name is {name} and I am {age} years old! An my hair color is {hairColor}</p>
        </div>
    );
}

export default MyFunctionalComponentWithProps;