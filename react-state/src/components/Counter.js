import React from "react";

class Counter extends React.Component {
    //state
    state  = {
        count: 0
    }

    //function to handle incrementing counter by one
    increment = () => {
        //set state = needs to set state to recognize the change in increment (necessary w class components)
        this.setState({count: this.state.count + 1})
        console.log(`Incremented: ${this.count}`)
    }

    decrement = () => {
        this.setState({count: this.state.count - 1}) //increments the state count by 1
        console.log(`Decremented: ${this.count}`) //decrements the state count by 1
    }

    render() {
        return (
            <div>
                <h3>Result: {this.state.count}</h3>
                {/* onClick to bind the increment function */}
                <button onClick={this.increment}>Increment</button>
                {/* onClick to bind the decrement function */}
                <button onClick={this.decrement}>Decrement</button>
            </div>
        )
    }
}

export default Counter;