import React, { Component } from 'react';
import { Button, Icon } from 'antd';

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
        <Button href="/about" style={{ marginTop: "10%", color:"#212121" }} className="intro-button" ghost>GET TO KNOW ME<Icon type="play-circle" style={{ color: '#212121' }} /></Button>
      </div>
    );
  }
}

export default Intro;