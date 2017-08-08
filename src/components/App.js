import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Home from './home/Home'
import NavbarHeader from './home/NavbarHeader'
import About from './about/About'
import EmployeeDirectory from './employee-directory/EmployeeDirectory'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavbarHeader />
          <div className="container-fluid">
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/directory" component={EmployeeDirectory} />
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
