import React, { Component } from 'react';
import { Button, Row } from 'antd';

class Resume extends Component {
  render() {
    return (
      <div style={{ zIndex:'1', marginLeft: '5vw'}}>
        <a download href="/Media/Nic_Leask_Resume_3_6_20.docx" title="NicLeaskResume">
          <img className="resume" style={{ maxHeight: '80vh', marginTop: '50px', pointerEvents:'all' }} alt="NicLeaskResume" src="/Media/Nic_Leask_Resume_3_6_20.png"/>
        </a>
        <div style={{ color:'white', width:'100%', textAlign:'center', pointerEvents:'all'}}>Click to <a className="customLink" download href="/Media/Nic_Leask_Resume_3_6_20.docx" title="NicLeaskResume">download</a></div>
        <Row style={{ marginBottom:"40px", alignItems: 'center', justifyContent: 'center'}} className="smallOff">
          <Button href="/contact" style={{ marginRight: "10px", color:"#FF3A46", maxWidth: '100px' }} className="intro-button" ghost>Contact</Button>
          <Button href="/" style={{ color:"#212121", maxWidth: '100px' }} className="intro-button" ghost>Home</Button>
        </Row>
        <Row style={{marginBottom:"40px"}} className="smallOn">
          <Button href="/contact" style={{ marginTop: '10px', color:"#FF3A46" }} className="intro-button" ghost>Contact</Button>
          <Button href="/" style={{ marginTop: '10px', color:"#212121" }} className="intro-button" ghost>Home</Button>
        </Row>
      </div>
    );
    
  }
}

export default Resume;