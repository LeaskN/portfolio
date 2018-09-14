import React, { Component } from 'react';
import { Icon, Menu, Dropdown } from 'antd';
const SubMenu = Menu.SubMenu;
const menu = (
  <Menu>
    <Menu.Item><a href="/">Welcome</a></Menu.Item>
    <Menu.Item><a href="/about">About</a></Menu.Item>
    <Menu.Item><a href="/Projects">Projects</a></Menu.Item>
    <Menu.Item><a href="/Resume">Resume</a></Menu.Item>
    <SubMenu title="My Websites">
      <Menu.Item><a href="https://timetravel-8e8c7.firebaseapp.com/">Time Travel</a></Menu.Item>
      <Menu.Item><a href="https://basicnutritionus.firebaseapp.com/">Get Fit</a></Menu.Item>
      <Menu.Item><a href="https://leaskn.github.io./">Galvanize-Zombies</a></Menu.Item>
      <Menu.Item><a href="http://university2-project.surge.sh/">University Matcher</a></Menu.Item>
      <Menu.Item><a href="https://anteup-app.firebaseapp.com/">Ante-Up</a></Menu.Item>
    </SubMenu>
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
              <a href="https://www.linkedin.com/in/nicholas-leask/"><Icon type="linkedin"/></a>
            </div><br/>
            <div>
              <a href="https://github.com/LeaskN"><Icon type="github"/></a>
            </div><br/>
            <div>
              <a href="/Media/Nic_Leask_Resume.pdf" download><Icon type="file-text"/></a>
            </div><br/>
            <div>
              <a href="https://www.instagram.com/nesquicknic/"><Icon type="instagram"/></a>
            </div><br/>
          </div>
      </div>
    );
  }
}

export default Sidebar;