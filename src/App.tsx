import * as React from "react";
import "./App.css";

interface AppState {
  count: number;
}

class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      count: 0
    };

    this.plus = this.plus.bind(this);
    this.minus = this.minus.bind(this);
    this.double = this.double.bind(this);
    this.square = this.square.bind(this);
    this.reset = this.reset.bind(this);
  }

  plus = (event: any) => {
    this.setState({ count: this.state.count + 1 });
  };

  minus = (event: any) => {
    this.setState({ count: this.state.count - 1 });
  };

  double = (event: any) => {
    this.setState({ count: this.state.count * 2 });
  };

  square = (event: any) => {
    this.setState({ count: this.state.count ** 2 });
  };

  reset = (event: any) => {
    this.setState({ count: 0 });
  };

  public render() {
    return (
      <div className="App">
        <p>{this.state.count}</p>
        <input type="button" onClick={this.plus} value="+" />  
        <input type="button" onClick={this.minus} value="-" />  
        <input type="button" onClick={this.double} value="*" />  
        <input type="button" onClick={this.square} value="**" />
        <input type="button" onClick={this.reset} value="reset" />
      </div>
    );
  }
}

export default App;
