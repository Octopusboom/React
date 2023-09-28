import React, { Component } from 'react';


// ----------- Constructor -----------

// class Mounting extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {favouriteCollor: "tomato"};
//     }
//     render() {
//         // Using the state object:
//         return (
//             <h1>My Fav color is {this.state.favouriteCollor}</h1>
//         );
//     }
// }

// export default Mounting;


// // ----------- getDerivedStateFromProps() -----------
// //  It gets invoked right before calling the render method.

// class Mounting extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {favouriteCollor: "tomato"};
//     }

//     static getDerivedStateFromProps(props, state) {
//         return {favouriteCollor: props.newfavouriteCollor}
//     }
//     render() {
//         // Using the state object:
//         return (
//             <h1>My Fav color is {this.state.favouriteCollor}</h1>
//         );
//     }
// }

// export default Mounting;


// ----------- ComponentDidMount() -----------

// It is invoked after component was added to DOM

// class Mounting extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {favouriteCollor: "tomato"};
//     }

//     componentDidMount() {
//         setTimeout(()=> {
//             this.setState({favouriteCollor: "purple"})
//         }, 3000)
//     }
//     render() {
//         // Using the state object:
//         return (
//             <h1>My Fav color is {this.state.favouriteCollor}</h1>
//         );
//     }
// }

// export default Mounting;


// ----------- render () -----------

// render is invoked when a component is mounted also when it is updated

class Mounting extends Component {
    constructor(props) {
        super(props);
        this.state = {favouriteCollor: "tomato"};
    }

    changeColor = () => {
        this.setState({favouriteCollor: "Green"})
    }

    render() {
        // Using the state object:
        return (
            <>
            <h1>My Fav color is {this.state.favouriteCollor}</h1>
            <button onClick={this.changeColor}>Change color</button>
            </>
        );
    }
}

export default Mounting;