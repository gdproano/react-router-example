import React from 'react';
import { BrowserRouter, Link, Prompt, Route, Switch } from "react-router-dom";
import About from './About';
import Home from './Home';
import './App.css';
import ContactRouter from './contactRouter';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact Us</Link>
      </nav>
      <Prompt 
      message={() => {
        return window.location.href.includes('contact')? true : "Are you sure to exit this page?";
      }}/>
      <Switch>
        <Route exact path={["/home", "/"]}>
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <ContactRouter />
        </Route>
        <Route>
          Default Page
        </Route>
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
