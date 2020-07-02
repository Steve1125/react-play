import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      myState: 40
    }
  }

  handleClick = () => {
    //setState is async method
    // this.setState({ startNum: this.state.startNum + 1 },
    //   () => console.log(this.state.startNum));

    //keep previous state before state getting update
    this.setState((prevState, prevProps) => {
      return { myState: prevState.myState + 1 }
    },
      () => console.log(this.state.myState));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {this.state.myState}
          </p>
          <button
            onClick={this.handleClick}
          >
            Update State
          </button>
        </header>
      </div>
    );
  }

}

export default App;
