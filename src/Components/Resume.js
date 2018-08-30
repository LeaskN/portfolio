import React, { Component } from 'react';

class Resume extends Component {
  render() {
    return (
      // <div style={{ zIndex:'1' }}>
      //   <img className="zoom" style={{ height:'90vh', margin:'5%', pointerEvents:'all' }} src="/Media/Nic_Leask_Resume_3-8-18-1.png" alt=""></img>
      // </div>

      <div style={{ zIndex:'1' }}>
        <img style={{ height:'90vh', margin:'5%', pointerEvents:'all' }} src="/Media/Nic_Leask_Resume_3-8-18-1.png" alt=""></img>
      </div>

      // <div className="thumb" style={{ justifyContent:'center', alignContent:'center',  zIndex:'1'}}>
      //   <a className="thumb"><img style={{ height:'90vh', margin:'5%', pointerEvents:'all' }} src="/Media/Nic_Leask_Resume_3-8-18-1.png" alt=""/>
      //     <span>
      //       <img src="/Media/Nic_Leask_Resume_3-8-18-1.png">
      //       </img>
      //     </span>
      //   </a>
      // </div>    
    );
  }
}

export default Resume;