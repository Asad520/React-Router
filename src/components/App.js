import React, { Component } from "react";
import Head from "../components/Head";
import imag from "../imag/yui.jpg";

class App extends Component {
  constructor() {
    super();
    this.state = { isLoading: true, loggedIn: false };
    this.logStatus = this.logStatus.bind(this);
  }

  logStatus(status) {
    console.log("AAAAAAAAAAAAAAAAA", status);
    this.setState((prevState) => {
      return { loggedIn: !prevState.loggedIn };
    });
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 1000);
  }

  render() {
    return (
      <div>
        {this.state.isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <div>
            <Head
              name="Asad"
              status={this.state.loggedIn}
              logStatus={this.logStatus}
            />
            <Main />
            <Foot />
          </div>
        )}
      </div>
    );
  }
}

class Main extends Component {
  render() {
    return (
      <div className="main">
        <ul>
          This is main site:
          <li>Option 1 </li>
          <li>Option 1 </li>
          <li>Option 1 </li>
        </ul>
        <img
          src={imag}
          alt="No Pic Found"
          onMouseOver={() =>
            (document.getElementsByClassName("yui")[0].innerHTML =
              "YYYYUUUUIIIII!!!!")
          }
          onMouseLeave={() =>
            (document.getElementsByClassName("yui")[0].innerHTML = "")
          }
        />
        <div className="yui"></div>
      </div>
    );
  }
}

function Foot() {
  return <h3 className="foot">This is my footer!!!</h3>;
}

export default App;
