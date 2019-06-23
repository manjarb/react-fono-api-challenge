import React from 'react'
import ReactDOM from 'react-dom'
import 'bulma/css/bulma.css'
import {
  BrowserRouter as Router, Route, Link, Redirect, withRouter,
} from 'react-router-dom'
//
import { Landing } from './containers'

const App = () => (
  <Router>
    <Route path="/" exact component={Landing} />
  </Router>
)

ReactDOM.render(<App />, document.getElementById('app'))
