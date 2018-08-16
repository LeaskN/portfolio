import React, { Component } from 'react';
import { Icon, Card  } from 'antd';
import Avatar from './Avatar';


class AboutMe extends Component {
  render() {
    return (
      <div className='about-me' style={{paddingRight: '12.5%'}}>
        <div className='about-me-row-1'>
          <Avatar className='about-me-avatar'/> 
          <h1 style={{ alignSelf: 'center', marginBottom: '0', color:'#F85552'}}>About Me:</h1>
        </div>
        <div className='about-me-row-2'>
          <Card style={{ height: '222px', fontSize: '1rem', display: 'flex', width: '200px', justifyContent: 'center', alignContent: 'center', alignItems: 'center'  }}>
            <div>
            <h4 style={{ color:'#F85552'}}>LinkedIn: <a href="https://www.linkedin.com/in/nicholas-leask/"><Icon type="linkedin" style={{  pointerEvents: 'all', color: 'white' }}/></a></h4>
            </div><hr/>
            <div>
            <h4 style={{ color:'#F85552'}}>GitHub: <a href="https://github.com/LeaskN"><Icon type="github" style={{  pointerEvents: 'all', color: 'white' }}/></a></h4>
            </div><hr/>
            <div>
            <h4 style={{ color:'#F85552'}}>Resume: <a href="/Media/Nic_Leask_Resume.pdf" download><Icon type="file-text" style={{  pointerEvents: 'all', color: 'white' }}/></a></h4>
            </div><hr/>
            <div>
            <h4 style={{ color:'#F85552'}}>Instagram: <a href="https://www.instagram.com/nesquicknic/"><Icon type="instagram" style={{  pointerEvents: 'all', color: 'white' }} /></a></h4>
            </div><hr/>
          </Card>
          <Card style={{ height: '222px'}}>
            <span style={{fontSize:'14px', color:'#ED5556', fontWeight:'bold', fonStyle:'italic',}}>
              Professionally, {' '} 
            </span> 
             I am a <span style={{fontSize:'14px', color:'#ED5556', fontWeight:'bold', fonStyle:'italic',}}>
              full stack web developer, {' '} 
            </span> with a passion for full stack applications. I'm currently working with <span style={{fontSize:'14px', color:'#ED5556', fontWeight:'bold', fonStyle:'italic',}}>
              Javascript 
            </span>, <span style={{fontSize:'14px', color:'#ED5556', fontWeight:'bold', fonStyle:'italic',}}>
              React 
            </span>, <span style={{fontSize:'14px', color:'#ED5556', fontWeight:'bold', fonStyle:'italic',}}>
              Node.js 
            </span>, <span style={{fontSize:'14px', color:'#ED5556', fontWeight:'bold', fonStyle:'italic',}}>
              HTML 
            </span>, and <span style={{fontSize:'14px', color:'#ED5556', fontWeight:'bold', fonStyle:'italic',}}>
              CSS 
            </span>. I'm consistently working on new projects. Most recently these projects have been revolving around <span style={{fontSize:'14px', color:'#ED5556', fontWeight:'bold', fonStyle:'italic',}}>
              React {' '} 
            </span>, however I am always working to improve my <span style={{fontSize:'14px', color:'#ED5556', fontWeight:'bold', fonStyle:'italic',}}>
              software engineering {' '} 
            </span>skills.        
          </Card>
        </div>
    </div>
    );
  }
}

export default AboutMe;

