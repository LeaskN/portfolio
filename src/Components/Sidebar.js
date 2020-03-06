import React, { Component } from 'react';
import { Icon, Menu, Dropdown } from 'antd';
const SubMenu = Menu.SubMenu;
const menu = (
  <Menu>
    <SubMenu title="Direct Project Links">
      <Menu.Item><a target="blank" href="https://nebulaacademy.com">Nebula Academy</a></Menu.Item>
      <Menu.Item><a target="blank" href="https://aws.nebulaacademy.com">Nebula Academy: AWS</a></Menu.Item>
      <Menu.Item><a target="blank" href="https://csteach.nebulaacademy.com">Nebula Academy: CSTeach</a></Menu.Item>
      <Menu.Item><a target="blank" href="https://code.nebulaacademy.com">Nebula Academy: Bootcamp</a></Menu.Item>
      <Menu.Item><a target="blank" href="https://videosync.co">VideoSync</a></Menu.Item>
      <Menu.Item><a target="blank" href="https://timetravel-8e8c7.firebaseapp.com/">Time Travel</a></Menu.Item>
      <Menu.Item><a target="blank" href="https://basicnutritionus.firebaseapp.com/">Get Fit</a></Menu.Item>
      <Menu.Item><a target="blank" href="https://leaskn.github.io./">Galvanize-Zombies</a></Menu.Item>
      <Menu.Item><a target="blank" href="http://university2-project.surge.sh/">University Matcher</a></Menu.Item>
      <Menu.Item><a target="blank" href="https://anteup-app.firebaseapp.com/">Ante-Up</a></Menu.Item>
      <Menu.Item><a target="blank" href="https://glowingtext.firebaseapp.com/">Glowing-Text</a></Menu.Item>
      <Menu.Item><a target="blank" href="https://starwarsempireposter.firebaseapp.com/">Empire Poster</a></Menu.Item>
      <Menu.Item><a target="blank" href="https://dynamicmatrixcssposter.firebaseapp.com/">Matrix Poster</a></Menu.Item>
    </SubMenu>
    <Menu.Item><a href="/">Home</a></Menu.Item>
    <Menu.Item><a href="/about">About</a></Menu.Item>
    <Menu.Item><a href="/Projects">All Projects</a></Menu.Item>
    <Menu.Item><a href="/Resume">Resume</a></Menu.Item>
  </Menu>
);

class Sidebar extends Component {
  render() {
    return (
      <div id="sidebar">
        <div>
            <div>
              <a href="/"><Icon type="home" /></a>
            </div><br/>
            <div>
              <Dropdown overlay={menu} trigger={['click']}>
                <a className="ant-dropdown-link" href="">
                <Icon trigger={['click']} type="menu-unfold"/>
                </a>
              </Dropdown>
            </div><br/>
            <div>
              <a href="https://www.linkedin.com/in/nicholas-leask/" target="_blank" rel="noopener noreferrer"><Icon type="linkedin"/></a>
            </div><br/>
            <div>
              <a href="https://github.com/LeaskN" target="_blank" rel="noopener noreferrer"><Icon type="github"/></a>
            </div><br/>
            <div>
              <a href="/resume" ><Icon type="file-text"/></a>
            </div><br/>
            <div>
              <a href="https://twitter.com/LeaskNicholas" target="_blank" rel="noopener noreferrer"><Icon type="twitter"/></a>
            </div><br/>
          </div>
      </div>
    );
  }
}

export default Sidebar;