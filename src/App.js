import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar></Navbar>
          <Switch>
            <Route exact path="/">
              <News key="General" pageSize={8} country='in' category="General"></News>
            </Route>
            <Route exact path="/Business">
              <News key="Business" pageSize={8} country='in' category="Business"></News>
            </Route>
            <Route exact path="/Entertainment">
              <News key="Entertainment" pageSize={8} country='in' category="Entertainment"></News>
            </Route>
            <Route exact path="/Health">
              <News key="Health" pageSize={8} country='in' category="Health"></News>
            </Route>
            <Route exact path="/Science">
              <News key="Science" pageSize={8} country='in' category="Science"></News>
            </Route>
            <Route exact path="/Sports">
              <News key="Sports" pageSize={8} country='in' category="Sports"></News>
            </Route>
            <Route exact path="/Technology">
              <News key="Technology" pageSize={8} country='in' category="Technology"></News>
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}
