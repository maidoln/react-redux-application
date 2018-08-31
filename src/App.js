import React, { Component } from 'react';

class App extends Component {
  render() {
    // const greeting = "hey!"
    // const dom = <h1 className="foo">{greeting}</h1>;
    // return dom;
    return (
      <React.Fragment>
        <label htmlFor="bar">bar</label>
        <input type="text" onClick={() => {console.log("I am Mai")}} />
      </React.Fragment>
      )
    
  }
}

export default App;
