import React from 'react';
import Siderow from './Siderow';
import Body from './Body';
import Footer from './Footer';
import  './player.css'


function Player({ spotify }) {

  return (
    <div className='player'>
      <div className='player_body'>
        <Siderow />
        <Body spotify={spotify}/>
        <Footer spotify={spotify}/>
      </div>
    </div>
  )
}

export default Player