import React, { Component } from 'react';

class Avatar extends Component {
  render() {
    return (
      <div className="avatarContainer">
        <div className="avatar">
          <img className="headshot" src="/Media/Headshot.png" alt=""/>
        </div>
      </div>
    );
  }
}

export default Avatar;