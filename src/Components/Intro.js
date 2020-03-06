import React, { Component } from 'react';
import { Button, Row } from 'antd';

class Intro extends Component {
  state = {
    size: 'large'
  }
  render() {
    return (
        <div className="intro" style={{ fontWeight:'bold'}}>
          <div className="text" id="red">
            <div>
                Hello, I'm Nicholas Leask<hr/>
            </div> 
            <div>
                I'm a Fullstack Web Developer!
            </div>
          </div>
          <Row className="smallOff">
            <Button href="/contact" style={{ marginRight: "10px", color:"#FF3A46" }} className="intro-button" ghost>Contact</Button>
            <Button href="/about" style={{ color:"#212121" }} className="intro-button" ghost>GET TO KNOW ME</Button>
            <Button href="/resume" style={{ marginLeft: "10px", color:"#FF3A46" }} className="intro-button" ghost>Resume</Button>
          </Row>
          <Row className="smallOn">
            <Button href="/contact" style={{ marginTop: '10px', color:"#FF3A46" }} className="intro-button" ghost>Contact</Button>
            <Button href="/about" style={{ marginTop: '10px', color:"#212121" }} className="intro-button" ghost>GET TO KNOW ME</Button>
            <Button href="/resume" style={{ marginTop: '10px', color:"#FF3A46" }} className="intro-button" ghost>Resume</Button>
          </Row>
      </div>
    );
  }
}

export default Intro;