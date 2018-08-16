import React, { Component } from 'react';
import { Button, Icon } from 'antd';

class Intro extends Component {
  state = {
    size: 'large'
  }
  render() {
    return (
        <div className="intro" style={{ fontWeight:'bold', fonStyle:'italic'}}>
        <div>
            Hello, I'm Nicholas Leask,<hr/>
        </div> 
        <div>
            I'm a Fullstack Web Developer!
        </div>
        <Button href="/aboutme" style={{ marginTop: "10%", pointerEvents:"all", color:"#212121" }} className="intro-button" ghost>GET TO KNOW ME<Icon type="play-circle" style={{ color: '#212121' }} /></Button>
      </div>
    );
  }
}

export default Intro;