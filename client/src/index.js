import React from 'react'
import ReactDOM from 'react-dom'
import 'bulma/css/bulma.css'
import {
  BrowserRouter as Router, Route, Link, Redirect, withRouter,
} from 'react-router-dom'

const App = () => (
  <Router>
    {/* <Route path="/" exact render={() => (<Redirect to="/admin" />)} /> */}
    {/* <Route path="/admin" exact component={Admin} /> */}
    <h1>ueouoeu</h1>
    {/* <Route path="/" exact component={Landing} /> */}
  </Router>
)

ReactDOM.render(<App />, document.getElementById('app'))
