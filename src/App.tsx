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

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (event: any) => {
    this.setState({ count: this.state.count + 1 });
  };

  public render() {
    return (
      <div className="App">
        <p>{this.state.count}</p>
        <input type="button" onClick={this.handleClick} value="+1" />
      </div>
    );
  }
}

export default App;
