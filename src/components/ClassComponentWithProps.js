import React, { Component } from 'react';

class ClassComponentWithProps extends Component {
    render() {
        return (
            <div>
                <p>Hello my name is {this.props.name} and I am {this.props.age} years old! An my hair color is {this.props.hairColor}</p>
            </div>
        ); 
    }
}

export default ClassComponentWithProps;