import React, { Component } from 'react';
import { Icon, Button } from 'antd';


class Projects extends Component {
  render() {
    return (
      <div className='projects' style={{ paddingRight: '12.5%'}}>
        <div className='projects-header'>
          <h1 style={{ margin: '0'}}>Projects:</h1>
        </div>
        <div className="projectsContainer">
          <div className="projectBox">
            <a href="https://videosync.co">
              <img className="projectImage" src="/Media/video_sync.png" alt=""/>
            </a>
          </div>
          <div className="projectBox">
            <a href="https://anteup-app.firebaseapp.com/">
              <img className="projectImage" src="/Media/AnteUp_Front_Page_Image.png" alt=""/>
            </a>
          </div>
          <div className="projectBox">
            <a href="https://leaskn.github.io./">
              <img className="projectImage" src="/Media/Galvanize_Game_Front_Page_Image.png" alt=""/>
            </a>
          </div>
          <div className="projectBox">
            <a href="https://basicnutritionus.firebaseapp.com">
              <img className="projectImage" src="/Media/GetFit_Front_Page_Image.png" alt=""/>
            </a>
          </div>
          <div className="projectBox">
            <a href="https://dynamicmatrixcssposter.firebaseapp.com/">
              <img className="projectImage" src="/Media/DynamicMatrixCSSPoster.png" alt=""/>
            </a>
          </div>
          <div className="projectBox">
            <a href="http://university-matcher.surge.sh/">
              <img className="projectImage" src="/Media/University_Matcher_Front_Page.png" alt=""/>
            </a>
          </div>
          <div className="projectBox">
            <a href="https://timetravel-8e8c7.firebaseapp.com/">
              <img className="projectImage" src="/Media/TimeToTravel_Front_Page_Image.png" alt=""/>
            </a>
          </div>
          <div className="projectBox">
            <a href="https://starwarsempireposter.firebaseapp.com/">
              <img className="projectImage" src="/Media/JoinTheEmpire.png" alt=""/>
            </a>
          </div>
          <div className="projectBox">
            <a href="https://videosync.co">
              <img className="projectImage" src="/Media/video_sync.png" alt=""/>
            </a>
          </div>
          <div className="projectBox">
            <a href="https://anteup-app.firebaseapp.com/">
              <img className="projectImage" src="/Media/AnteUp_Front_Page_Image.png" alt=""/>
            </a>
          </div>
          <div className="projectBox">
            <a href="https://leaskn.github.io./">
              <img className="projectImage" src="/Media/Galvanize_Game_Front_Page_Image.png" alt=""/>
            </a>
          </div>
          <div className="projectBox">
            <a href="https://basicnutritionus.firebaseapp.com">
              <img className="projectImage" src="/Media/GetFit_Front_Page_Image.png" alt=""/>
            </a>
          </div>
          <div className="projectBox">
            <a href="https://dynamicmatrixcssposter.firebaseapp.com/">
              <img className="projectImage" src="/Media/DynamicMatrixCSSPoster.png" alt=""/>
            </a>
          </div>
          <div className="projectBox">
            <a href="http://university-matcher.surge.sh/">
              <img className="projectImage" src="/Media/University_Matcher_Front_Page.png" alt=""/>
            </a>
          </div>
          <div className="projectBox">
            <a href="https://timetravel-8e8c7.firebaseapp.com/">
              <img className="projectImage" src="/Media/TimeToTravel_Front_Page_Image.png" alt=""/>
            </a>
          </div>
          <div className="projectBox">
            <a href="https://starwarsempireposter.firebaseapp.com/">
              <img className="projectImage" src="/Media/JoinTheEmpire.png" alt=""/>
            </a>
          </div>
        <Button href="/resume" style={{ color:"#212121" }} className="intro-button" ghost>VIEW RESUME<Icon type="play-circle" style={{ color: '#212121' }} /></Button>
        </div>
    </div>
    );
  }
}

export default Projects;

