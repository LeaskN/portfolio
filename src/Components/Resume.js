import React, { Component } from 'react';

class Resume extends Component {
  render() {
    return (
    //   <img style={{ height:'90vh', margin:'5%', pointerEvents:'all' }} src="/Media/Nic_Leask_Resume_3-8-18-1.png" alt="resume">
    //   {/* <a href="/Media/Nic_Leask_Resume.pdf" download/> */}
    // </img>
      <div style={{ zIndex:'1' }}>
        <a download href="/Media/Nic_Leask_Resume_1_15_19.png" title="NicLeaskResume">
          <img style={{ height:'90vh', margin:'5%', pointerEvents:'all' }} alt="NicLeaskResume" src="/Media/Nic_Leask_Resume_1_15_19.png"/>
        </a>
      </div>
    );
  }
}

export default Resume;