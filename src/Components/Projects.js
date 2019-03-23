import React, { Component } from 'react';
import { Icon, Button } from 'antd';

class Projects extends Component {
  constructor() {
    super();
    this.state = {
      projects: [
        this.videosync = {
          url: "https://videosync.co",
          image:"/Media/video_sync.png"
        },
        this.ante_up = {
          url: "https://anteup-app.firebaseapp.com/",
          image:"/Media/AnteUp_Front_Page_Image.png"
        },
        this.galvanize_game = {
          url: "https://leaskn.github.io./",
          image:"/Media/Galvanize_Game_Front_Page_Image.png"
        },
        this.get_fit = {
          url: "https://basicnutritionus.firebaseapp.com",
          image:"/Media/GetFit_Front_Page_Image.png"
        },
        this.Matrix = {
          url: "https://dynamicmatrixcssposter.firebaseapp.com/",
          image:"/Media/DynamicMatrixCSSPoster.png"
        },
        this.university_matcher = {
          url: "http://university-matcher.surge.sh/",
          image:"/Media/University_Matcher_Front_Page.png"
        },
        this.Time_to_travel = {
          url: "https://timetravel-8e8c7.firebaseapp.com/",
          image:"/Media/TimeToTravel_Front_Page_Image.png"
        },
        this.Join_The_Empire = {
          url: "https://starwarsempireposter.firebaseapp.com/",
          image:"/Media/JoinTheEmpire.png"
        }, 
        this.Glowing_Text = {
          url: "https://glowingtext.firebaseapp.com/",
          image:"/Media/Glow.png"
        }
      ],
    };
  }

  render() {
    return (
      <div className='projects' style={{ paddingRight: '12.5%'}}>
        <div className='projects-header' id="red">
          <h1 style={{ margin: '0'}}>Projects:</h1>
        </div>
        <Button href="/resume" style={{ color:"#212121" }} className="intro-button" ghost>VIEW RESUME<Icon type="play-circle" style={{ color: '#212121' }} /></Button>
        { this.state.projects.map(project => (
            console.log(`${project.image}`)            
          ))
        }
        <div className="projectsContainer">
          { this.state.projects.map(project => (
              <div className="projectBox" key={`${project.url}`}>
                <a href={`${project.url}`}>
                  <img className="projectPicture" src={`${project.image}`} alt=""/>
                </a>
            </div>
            ))
          }
        </div>
    </div>
    );
  }
}

export default Projects;

