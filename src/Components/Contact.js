import React, { Component } from 'react';
import { Button, Row, Icon } from 'antd';

class Intro extends Component {
  state = {
    size: 'large'
  }
  render() {
    return (
        <div className="contact" style={{ fontWeight:'bold'}}>
          <div className="contactPointers">
            <div>
                Nicholas Leask<hr/>
            </div> 
            <div><Icon type="phone"/> <a style={{color:'#212121'}} href="tel:5165874938">516-587-4938</a></div>
            <div><Icon type="mail"/> <a style={{color:'#212121'}} href="mailto:leask.nicholas@gmail.com">leask.nicholas@gmail.com</a></div>
            <div><Icon type="linkedin"/> <a style={{color:'#212121'}} target="blank" href="https://www.linkedin.com/in/nicholas-leask/">in/nicholas-leask</a></div>
            <div><Icon type="github"/> <a style={{color:'#212121'}} target="blank" href="https://github.com/LeaskN">github.com/LeaskN</a></div>
          </div>
          <Row className="smallOff">
            <Button href="/about" style={{ color:"#212121" }} className="intro-button" ghost>GET TO KNOW ME</Button>
            <Button href="/resume" style={{ marginLeft: "10px", color:"#FF3A46" }} className="intro-button" ghost>Resume</Button>
          </Row>
          <Row className="smallOn">
            <Button href="/about" style={{ marginTop: '10px', color:"#212121" }} className="intro-button" ghost>GET TO KNOW ME</Button>
            <Button href="/resume" style={{ marginTop: '10px', color:"#FF3A46" }} className="intro-button" ghost>Resume</Button>
          </Row>
      </div>
    );
  }
}

export default Intro;