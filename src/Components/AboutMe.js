import React, { Component } from 'react';
import { Icon, Card, Button  } from 'antd';
import Avatar from './Avatar';
import { css } from 'emotion'

class AboutMe extends Component {
  render() {
    return (
      <div className='about-me' style={{ paddingRight: '12.5%'}}>
        <div className='about-me-row-1'>
          <Avatar className='about-me-avatar'/> 
          <h1 style={{ color:'#212121', alignSelf: 'center', marginBottom: '0', fontWeight:'bold'}}> About Me:</h1>
        </div>
        <div className='about-me-row-2'>
          <Card style={{ height: '400px', fontSize: '1rem', display: 'flex', width: '200px', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
            <div>
            <h4><a className={css`color: white; opacity: .95;&:hover{ color:#498490;}`} style={{ pointerEvents: 'all' }} href="https://www.linkedin.com/in/nicholas-leask/">LinkedIn <Icon type="linkedin" className={css`color: white; opacity: .95;&:hover{ color:#2593FC;}`}/></a></h4>
            </div><hr/>
            <div>
            <h4><a className={css`color: white; opacity: .95;&:hover{ color:#498490;}`} style={{ pointerEvents: 'all' }} href="https://github.com/LeaskN">GitHub <Icon type="github" className={css`color: white; opacity: .95;&:hover{ color:#2593FC;}`}/></a></h4>
            </div><hr/>
            <div>
            <h4><a className={css`color: white; opacity: .95;&:hover{ color:#498490;}`} style={{ pointerEvents: 'all' }} href="/Media/Nic_Leask_Resume.png" download>Resume <Icon type="file-text" className={css`color: white; opacity: .95;&:hover{ color:#2593FC;}`}/></a></h4>
            </div><hr/>
            <div>
            <h4><a className={css`color: white; opacity: .95;&:hover{ color:#498490;}`} style={{ pointerEvents: 'all' }} href="https://www.instagram.com/nesquicknic/">Instagram <Icon type="instagram" className={css`color: white; opacity: .95;&:hover{ color:#2593FC;}`} /></a></h4>
            </div>
          </Card>
          
          <Card classname="about-me-info" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '200px', color:'#212121', height: '400px', backgroundColor:'rgb(255, 255, 255, .2'}}>
            <span>
              Professionally, {' '} 
            </span> I am a <span style={{ color:'black', fontWeight:'bold'}}>
             full stack web developer, {' '} 
            </span> with a passion for both <span style={{ color:'black', fontWeight:'bold'}}>
              front-end {' '} 
            </span> and <span style={{ color:'black', fontWeight:'bold'}}>
              back-end  {' '} 
            </span>development. I'm currently working with 
            <span style={{ color:'black', fontWeight:'bold'}}>
            {' '} Javascript 
            </span>, <span style={{ color:'black', fontWeight:'bold'}}>
              React 
            </span>, <span style={{ color:'black', fontWeight:'bold'}}>
              Node.js 
            </span>, <span style={{ color:'black', fontWeight:'bold'}}>
              HTML 
            </span>, and <span style={{ color:'black', fontWeight:'bold'}}>
              CSS 
            </span>. I'm consistently working on new projects. Most recently these projects have been revolving around <span style={{ color:'black', fontWeight:'bold'}}>
              React {' '} 
            </span>, however I am always working to improve my <span style={{ color:'black', fontWeight:'bold'}}>
              software engineering {' '} 
            </span>skills.
            <br/>
            <br/>
            <hr/> 
            <br/>   
            <span> 
              As a STEAM Coach at LC Consulting, I am learning new technologies which I teach professionally, teaching teachers 
            <span/>
            <span style={{ color:'black', fontWeight:'bold'}}>
            {' '} Javascript 
            </span>, <span style={{ color:'black', fontWeight:'bold'}}>
              React 
            </span>, <span style={{ color:'black', fontWeight:'bold'}}>
              Node.js 
            </span>, <span style={{ color:'black', fontWeight:'bold'}}>
              HTML 
            </span>, and <span style={{ color:'black', fontWeight:'bold'}}>
              CSS 
            </span> and how to implement coding into their classrooms. I am also actively working to sustain our associated non-for-profit, We Connect The Dots.
            </span>
          </Card>
        </div>
        <Button href="/projects" style={{ color:"white" }} className="intro-button" ghost>VIEW PROJECTS<Icon type="play-circle" style={{ color: 'white' }} /></Button>
    </div>
    );
  }
}

export default AboutMe;

