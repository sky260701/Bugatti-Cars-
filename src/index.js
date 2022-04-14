import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Discover from './components/Discover';
import Man from './components/Man';
import { Switch , BrowserRouter as Router , Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import Best from './components/Best';
import Life from './components/Life';
import Career from "./components/Career";
import Trail from './components/Trail';
import Fuel from "./components/Fuel";
import Wall from './components/Wall';
import Mind from './components/Mind';

const appHistory = createBrowserHistory({forceRefresh:true});


ReactDOM.render(
  
    <React.StrictMode>
  <Router history={appHistory}>
      <Switch>
        <Route exact path="/" component={App} />
        <Route  path="/discover" component={Discover} />
        <Route path="/man" component={Man} />
        <Route path="/best" component={Best} />
        <Route path="/life" component={Life} />
        <Route path="/career" component={Career} />
        <Route path="/trail" component={Trail} />
        <Route path="/fuel" component={Fuel} />
        <Route path="/wall" component={Wall} />
        <Route path="/mind" component={Mind} />
       

      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
