import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";

import CreateTodo from './components/create-todo.component';
import EditTodo from './components/edit-todo.component';
import TodosList from './components/todos-list.component';

import logo from './logo.svg';

class App extends Component{
  render() {
    return(
      <Router>
        {/* adding a nav bar to access routes reusing React Logo */}
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="https://www.reactjs.org" target="_blank" rel="noopener noreferrer">
              <img src={logo} width="30" height="30" alt="reactjs.org" />
            </a>
            <Link to="/" className="navbar-brand">MERN-Stack todo App</Link>
            <div className="collapse navbar-collapse">
              {/* navbar link items */}
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Todos</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create Todo</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
          {/* creating routes and displaying associated components */}
          <Route path='/' exact component={TodosList} />
          <Route path='/edit/:id' component={EditTodo} />
          <Route path='/create' component={CreateTodo} />
        </div>
        
      </Router>

      
    );
  }
}

export default App;
