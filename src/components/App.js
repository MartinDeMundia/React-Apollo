

import React, { Component } from 'react';
import CreateLink from './CreateLink';
import LinkList from './LinkList';
import Header from './Header';
import Login from './Login';
import { Switch, Route ,Redirect } from 'react-router-dom';
import Search from './Search';




const App = () => (
  <div className="center w85">
    <Header />
    <div className="ph3 pv1 background-gray">
      <Switch>
        <Route
          exact
          path="/"
          render={() => <Redirect to="/new/1" />}
        />

        <Route
          exact
          path="/create"
          component={CreateLink}
        />
        <Route exact path="/login" component={Login} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/top" component={LinkList} />
        <Route
          exact
          path="/new/:page"
          component={LinkList}
        />
      </Switch>
    </div>
  </div>
);

/*const App = () => {
  return (
    <div className="center w85">
      <Header />
      <div className="ph3 pv1 background-gray">
        <Switch>
          <Route exact path="/" component={LinkList} />
          <Route
            exact
            path="/create"
            component={CreateLink}
          />
          <Route exact path="/login" component={Login} />
          <Route exact path="/search" component={Search} />
        </Switch>
      </div>
    </div>
  );
};*/




/*const App = () => {
  return <CreateLink />;
};*/

/*class App extends Component {
  render() {
    return <LinkList />;
  }
}*/

/*import logo from './../logo.svg';
import './../styles/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

export default App;
