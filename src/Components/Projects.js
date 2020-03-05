import React, { Component } from 'react';
import { Icon, Button, Row } from 'antd';

class Projects extends Component {
  constructor() {
    super();
    this.state = {
      filters:['Select Filter', 'CSS', 'HTML', 'React', 'JavaScript', 'Personal', 'API', 'Express', 'Auth', 'Games' ],
      projects: [
        this.NebulaAcademyBootcamp = {
          url: "https://code.nebulaacademy.com",
          image:"/Media/NebulaAcademyBootcamp.png",
          tags:['CSS', 'HTML', 'React', 'JavaScript', 'work'],
          name: 'NebulaAcademy Bootcamp',
        },
        this.NebulaAcademyAWS = {
          url: "https://aws.nebulaacademy.com",
          image:"/Media/NebulaAcademyAWS.png",
          tags:['CSS', 'HTML', 'React', 'JavaScript', 'work'],
          name: 'NebulaAcademy AWS',
        },
        this.NebulaAcademyCSTeach = {
          url: "https://csteach.nebulaacademy.com",
          image:"/Media/NebulaAcademyTeachers.png",
          tags:['CSS', 'HTML', 'React', 'JavaScript', 'work'],
          name: 'NebulaAcademy CSTeach',
        },
        this.NebulaAcademy = {
          url: "https://nebulaacademy.com",
          image:"/Media/NAIconTransparent720.png",
          tags:['CSS', 'HTML', 'React', 'JavaScript', 'work'],
          name: 'NebulaAcademy',
        },
        this.videosync = {
          url: "https://videosync.co",
          image:"/Media/video_sync.png",
          tags:['CSS', 'HTML', 'React', 'JavaScript', 'Personal', 'Express', 'API'],
          name: 'VideoSync',
        },
        this.ante_up = {
          url: "https://anteup-app.firebaseapp.com/",
          image:"/Media/AnteUp_Front_Page_Image.png",
          tags:['CSS', 'HTML', 'React', 'JavaScript', 'Personal', 'Auth'],
          name: 'AnteUp',
        },
        this.galvanize_game = {
          url: "https://leaskn.github.io./",
          image:"/Media/Galvanize_Game_Front_Page_Image.png",
          tags:['CSS', 'HTML', 'Personal', 'Games'],
          name: 'Galvanize Game',
        },
        this.get_fit = {
          url: "https://basicnutritionus.firebaseapp.com",
          image:"/Media/GetFit_Front_Page_Image.png",
          tags:['CSS', 'HTML', 'Personal', 'API', 'Express'],
          name: 'Get Fit',
        },
        this.Matrix = {
          url: "https://dynamicmatrixcssposter.firebaseapp.com/",
          image:"/Media/DynamicMatrixCSSPoster.png",
          tags:['CSS', 'HTML',],
          name: 'Matrix Poster',
        },
        this.university_matcher = {
          url: "http://university-matcher.surge.sh/",
          image:"/Media/University_Matcher_Front_Page.png",
          tags:['CSS', 'HTML', 'API', 'Express', ],
          name: 'University Matcher',
        },
        this.Time_to_travel = {
          url: "https://timetravel-8e8c7.firebaseapp.com/",
          image:"/Media/TimeToTravel_Front_Page_Image.png",
          tags:['CSS', 'HTML', 'JavaScript', 'Personal', 'API', 'Express'],
          name: 'Time to Travel',
        },
        this.Join_The_Empire = {
          url: "https://starwarsempireposter.firebaseapp.com/",
          image:"/Media/JoinTheEmpire.png",
          tags:['CSS', 'HTML', ],
          name: 'Empire Poster',
        }, 
        this.Glowing_Text = {
          url: "https://glowingtext.firebaseapp.com/",
          image:"/Media/Glow.png",
          tags:['CSS', 'HTML', ],
          name: 'Glowing Text',
        }, 
      ],
    };
  }
  changeFilter(e){
    this.setState({
      selected: e.target.value
    });
    this.renderProjects(e.target.value);
  }
  renderProjects(){
    if(this.state.selected && this.state.selected !== 'Select Filter'){
      return(
        this.state.projects.filter(project => project.tags.indexOf(this.state.selected) > -1).map(project => (
          <a className="projectBox" href={`${project.url}`} target="blank" key={`${project.url}`}>
            <img className="projectPicture" src={`${project.image}`} alt=""/>
            <div style={{ maxWidth:'100%', marginTop:"10px", fontSize: '24px', textAlign:'center', color:'white'}}>{project.name}</div>
          </a>
        ))
      )  
    } else {
      return(
        this.state.projects.map(project => (
          <a className="projectBox" href={`${project.url}`} target="blank" key={`${project.url}`}>
            <img className="projectPicture" src={`${project.image}`} alt=""/>
            <div style={{ maxWidth:'100%', marginTop:"10px", fontSize: '24px', textAlign:'center', color:'white'}}>{project.name}</div>
          </a>
        ))
      )
    }
  }

  render() {
    return (
      <div className='projects' style={{ paddingRight: '12.5%'}}>
        <div className='projects-header' id="red">
          <h1 style={{ margin: '0'}}>Projects:</h1>
        </div>
        <Button href="/resume" style={{ color:"#212121" }} className="intro-button" ghost>VIEW RESUME<Icon type="play-circle" style={{ color: '#212121' }} /></Button>
        <div className="projectsContainer">
          <select onChange={(e) => this.changeFilter(e)}style={{width:'30%', marginLeft:'35%', marginRight:'35%', fontSize: '24px'}}  id="filters">
            {this.state.filters.map(filter =>(
                <option key={filter} value={filter}>{filter}</option>
              ))
            }
          </select>
          {this.renderProjects()}
        </div>
    </div>
    );
  }
}

export default Projects;

