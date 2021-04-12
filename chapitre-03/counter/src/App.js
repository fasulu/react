import React from 'react'

import Counter from './component/Counter.js';
// import './styles/global.css';

class App extends React.Component {

  constructor() {
    super()

    this.state = {                                          // initialize counter with zero
      count1: 0,
      count2: 0
    }


    this.decrementCount1 = this.decrementCount1.bind(this)    // bind current decrementCount function value with decrementCount
    this.incrementCount1 = this.incrementCount1.bind(this)    // bind current incrementCount function value with incrementCount

    this.decrementCount2 = this.decrementCount2.bind(this)    // bind current decrementCount function value with decrementCount
    this.incrementCount2 = this.incrementCount2.bind(this)    // bind current incrementCount function value with incrementCount
  }

  decrementCount1() {                                        // create function to decrement current counter value with one
    const { count1 } = this.state                            // move current counter value to decrementCount constant

    this.setState({                                         // using setState to change 
      count1: count1 - 1                                      // decrement counter current value by 1
    })
  }

  // decrementCount = () => {
  //   const { count } = this.state

  //   this.setState({
  //     count: count - 1
  //   })
  // }

  incrementCount1() {
    const { count1 } = this.state

    this.setState({
      count1: count1 + 1
    })

    // this.setState({
    //   count: this.state.count + 1
    // })
  }

  decrementCount2() {                                        // create function to decrement current counter value with one
    const { count2 } = this.state                            // move current counter value to decrementCount constant

    this.setState({                                         // using setState to change 
      count2: count2 - 1                                      // decrement counter current value by 1
    })
  }

  incrementCount2() {
    const { count2 } = this.state

    this.setState({
      count2: count2 + 1
    })
  }


  render() {
    return (

      <div>

        <div>
          <h1>Counter A</h1>

          <Counter count1={this.state.count1} decrementFunction1={this.decrementCount1} incrementFunction1={this.incrementCount1} />


        </div>


        <div>

          <h1>Counter B</h1>

          <Counter count2={this.state.count2} decrementFunction2={this.decrementCount2} incrementFunction2={this.incrementCount2} />

        </div>

      </div >
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
