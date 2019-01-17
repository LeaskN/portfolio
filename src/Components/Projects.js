import React, { Component } from 'react';
import { Icon, Button, Row, Col  } from 'antd';


class Projects extends Component {
  render() {
    return (
      <div className='projects' style={{ paddingRight: '12.5%'}}>
        <div className='projects-header'>
          <h1 style={{ margin: '0'}}>Projects:</h1>
        </div>
        <Row className='projectsBox' style={{ display: 'flex'}}>
          <Col span={6}>
              <a href="https://videosync.co">
                <img className="projectBox1" src="/Media/video_sync.png" alt=""/>
              </a>
          </Col>
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
        </Row>
        <Row className='projectsBox' style={{ display: 'flex' }}>
          <Col span={6}>
              <a href="http://university-matcher.surge.sh/">
                <img className="projectBox1" src="/Media/University_Matcher_Front_Page.png" alt=""/>
              </a>
          </Col>
          <Col span={6}>
            <a href="https://timetravel-8e8c7.firebaseapp.com/">
              <img className="projectBox1" src="/Media/TimeToTravel_Front_Page_Image.png" alt=""/>
            </a>
          </Col>
          <Col span={6}>
            <a href="https://dynamicmatrixcssposter.firebaseapp.com/">
              <img className="projectBox1" src="/Media/DynamicMatrixCSSPoster.png" alt=""/>
            </a>
          </Col>
          <Col span={6}>
            <a href="https://starwarsempireposter.firebaseapp.com/">
              <img className="projectBox1" src="/Media/JoinTheEmpire.png" alt=""/>
            </a>
          </Col>
        </Row>
          <Button href="/resume" style={{ color:"#212121" }} className="intro-button" ghost>VIEW RESUME<Icon type="play-circle" style={{ color: '#212121' }} /></Button>
    </div>
    );
  }
}

export default Projects;

