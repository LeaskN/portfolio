import React, { Component } from 'react';
import { Icon, Button, Row, Col  } from 'antd';


class Projects extends Component {
  render() {
    return (
      <div className='projects' style={{ paddingRight: '12.5%'}}>
        <div className='projects-header'>
          <h1 style={{ margin: '0'}}>Projects:</h1>
        </div>
        {/* <div className='navBar' >
          <a href=" ">Pizza</a>
          <a href=" ">REACT </a>
          <a href=" " >CSS </a>
          <a href=" ">JAVASCRIPT</a>
        </div> */}
        <Row className='projectsBox'>
          <Col span={6}>
            <a href="https://anteup-app.firebaseapp.com/">
              <img className="projectBox1" src="/Media/AnteUp_Front_Page_Image.png" alt=""/>
            </a>
          </Col>
          <Col span={6}>
            <a href="https://leaskn.github.io./">
            <img className="projectBox1" src="/Media/Galvanize_Game_Front_Page_Image.png" alt=""/>
            </a>
          </Col>
          <Col span={6}>
            <a href="https://basicnutritionus.firebaseapp.com">
              <img className="projectBox1" src="/Media/GetFit_Front_Page_Image.png" alt=""/>
            </a>
          </Col>
          <Col span={6}>
            <a href="https://timetravel-8e8c7.firebaseapp.com/">
              <img className="projectBox1" src="/Media/TimeToTravel_Front_Page_Image.png" alt=""/>
            </a>
          </Col>
          </Row>
          <Row className='projectsBox'>
          <Col span={6}>
              <a href="http://university-matcher.surge.sh/">
                <img className="projectBox1" src="/Media/University_Matcher_Front_Page.png" alt=""/>
              </a>
          </Col>
          <Col span={6}>
              <a href="https://videosync.io">
                <img className="projectBox1" src="/Media/video_sync.png" alt=""/>
              </a>
          </Col>
        </Row>
          <Button href="/resume" style={{ color:"#212121" }} className="intro-button" ghost>VIEW RESUME<Icon type="play-circle" style={{ color: '#212121' }} /></Button>
    </div>
    );
  }
}

export default Projects;

