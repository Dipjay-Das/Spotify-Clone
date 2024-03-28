import React from 'react';
import './siderowOption.css';

function SiderowOption({ title, Icon }) {
  // console.log()
  return (
    <div className='siderowOption'>
      {/* {Icon && <Icon className="siderowOption__icon" />} */}
      {/* {Icon ? <h4>{title}</h4> : <p>{title}</p>}   */}
      <Icon className="siderowOption__icon" />
      <h4>{title}</h4>
    </div>
  )
}

export default SiderowOption