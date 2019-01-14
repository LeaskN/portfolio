import React, { Component } from 'react';

class Avatar extends Component {
  render() {
    return (
      <div className="avatarContainer">
        <div className="avatar">
          <img className="headshot" src="/Media/nic_new_headshot_with_background.png" alt=""/>
        </div>
      </div>
    );
  }
}

export default Avatar;