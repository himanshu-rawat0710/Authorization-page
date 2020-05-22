import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import SignUpForm from './Pages/SignUpForm';
import SignInForm from './Pages/SignInForm';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router basename="/">
        <div className="App">
          <div className="outer-layout"></div>
          <div className="form-layout">
            <div className="pageSwitcher">
                <NavLink to="/Authorization/sign-in" activeClassName="pageSwitcher-active" className="pageSwitcher-item">Sign In</NavLink>
                <NavLink exact to="/Authorization" activeClassName="pageSwitcher-active" className="pageSwitcher-item">Sign Up</NavLink>
              </div>

              <div className="FormTitle">
                  <NavLink to="/Authorization/sign-in" activeClassName="form-active-link" className="form-link">Sign In</NavLink> or <NavLink exact to="/Authorization" activeClassName="form-active-link" className="form-link">Sign Up</NavLink>
              </div>


              
              <Route exact path="/" component={SignUpForm}>
              </Route>

              <Route exact path="/Authorization" component={SignUpForm}>
              </Route>
              
              <Route path="/Authorization/sign-in" component={SignInForm}>
              </Route>



          </div>

        </div>
      </Router>
    );
  }
}

export default App;
