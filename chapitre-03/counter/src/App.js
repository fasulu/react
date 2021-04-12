import React from 'react'
import './App.css'

import Counter from './component/Counter.js'

class App extends React.Component {

  constructor() {
    super()

    this.state = {
      count: 0
    }

    this.decrementCount = this.decrementCount.bind(this)
    this.incrementCount = this.incrementCount.bind(this)
  }

  decrementCount() {
    const { count } = this.state

    this.setState({
      count: count - 1
    })
  }

  // decrementCount = () => {
  //   const { count } = this.state

  //   this.setState({
  //     count: count - 1
  //   })
  // }

  incrementCount() {
    const { count } = this.state

    this.setState({
      count: count + 1
    })

    // this.setState({
    //   count: this.state.count + 1
    // })
  }

  render() {
    return (
      <div>
        <h1>Counter</h1>

        <Counter count={this.state.count} removeFunction={this.decrementCount} addFunction={this.incrementCount} />

      </div>
    )
  }
}

export default App


// import React from 'react';
// import './App.css';


// class App extends React.Component {

//   constructor() {
//     super()

//     this.state = {      // initialize counter with zero
//       count: 0
//     }

//     this.decrementCount = this.decrementCount.bind(this)    // bind current decrementCount function value with decrementCount
//     this.incrementCount = this.incrementCount.bind(this)    // bind current incrementCount function value with incrementCount

//   }

//   decrementCount() {                          // create function to decrement current counter value with one

//     const { decrementCounter } = this.state    // move current counter value to decrementCount constant

//     this.setState({                         // using setState to change 
//       count: decrementCounter - 1           // decrement counter current value by 1
//     })

//   }

//   incrementCount() {                        // create function to increment current counter value with one

//     const { incrementCounter } = this.state   // move current counter value to incrementCount constant

//     this.setState({                         // using setState to change 

//       count: incrementCounter + 1             // increment counter current value by 1

//     })
//   }

//   render() {


//     return (

//       <div className= "divClass">

//         <h1>Counter</h1>

//         <h2>{this.state.count}</h2>     {/* show current counter value */}
        
//         <button className="redbg" onClick={this.decrementCount}>-</button>      {/* pass each button click to decrementCount function  */}

//         <button className="greenbg" onClick={this.incrementCount}>+</button>    {/* pass each button click to incrementCount function */}

//       </div >
//     );
//   }
// }

// export default App;
