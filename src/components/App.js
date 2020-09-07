import React, { Component } from "react";
import Head from "../components/Head";
import Home from "../components/Home";
import Profile from "../components/Profile";
import About from "../components/About";
import imag from "../imag/yui.jpg";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

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
              name="User"
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
        <Router>
          <ul>
            This is main site:
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/Profile">Profile</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
          </ul>
          <Switch>
            <Route exact path="/Home">
              <Home />
            </Route>
            <Route path="/Profile">
              <Profile />
            </Route>
            <Route path="/About">
              <About />
            </Route>
          </Switch>
        </Router>
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
