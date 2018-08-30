import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css';
import 'antd/dist/antd.css'
import Sidebar from "./Components/Sidebar";
import Intro from "./Components/Intro";
import AboutMe from "./Components/AboutMe";
import Canvas from "./Components/Canvas";
import Projects from "./Components/Projects";
import Resume from "./Components/Resume";
import NotFound from "./Components/NotFound";

class App extends Component {
  render() {
    return (
      <div>
        <div className="app">
          <div className="canvas-background">
            <Canvas />
          </div>
            <Sidebar />
            <Switch>
              <Route exact path='/' component={ Intro } />
              <Route exact path='/about' component={ AboutMe } />
              <Route exact path='/projects' component={ Projects } />
              <Route exact path='/resume' component={ Resume } />
              <Route  path='*' component={ NotFound } />
            </Switch>
        </div>
      </div>
    );
  }
}

export default App;
