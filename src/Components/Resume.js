import React, { Component } from 'react';

class Resume extends Component {
  render() {
    return (
      <div style={{ zIndex:'1' }}>
        <a download href="/Media/Nic_Leask_Resume.png" title="NicLeaskResume">
          <img style={{ height:'100vh', pointerEvents:'all' }} alt="NicLeaskResume" src="/Media/Nic_Leask_Resume.png"/>
        </a>
      </div>
    );
  }
}

export default Resume;