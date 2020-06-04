import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import routes from './router/index'

function App() {
  return (
    <Router>
      <div>
        <header className="title">
          <Link to="/">首页</Link>
          <Link to="/user">用户中心</Link>
        </header>
        {
          routes.map((el, index) => {
            if (el.exact) {
              return <Route key={index} exact path={el.path} render={props => (<el.component { ...props } routes={el.routes} /> )} />
            } else {
              return <Route key={index} path={el.path} render={props => (<el.component { ...props } routes={el.routes} /> )} />
            }
          })
        }
      </div>
    </Router>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
