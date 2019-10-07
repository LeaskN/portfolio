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
  constructor(props) {
    super(props);
    this.state = {width: props.width};
  }

  componentWillMount(){
    this.setState({width: window.innerWidth + 'px'});
  }
  render() {
    App.propTypes = {
      width:React.propTypes
     };
     
     App.defaultProps = {
      width:'500px'
     };
     if(Number(this.state.width.slice(0,-2)) < 900) alert('This website has not been fully optimized for smaller screens yet. Click `Ok` to coninue');
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
