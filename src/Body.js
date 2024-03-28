import React from 'react'
import './body.css';
import Header from './Header';
import { useStateValue } from "./StateProvider";
import { MdPlayCircleFilled } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import { MdMoreHoriz } from "react-icons/md";
import SongRow from './SongRow';

function Body() {
  const [{ discover_weekly }, dispatch] = useStateValue();
  // console.log(discover_weekly)
  return (
    <div className='body'>
      <Header />

      <div className='body__info'>
        <img src={discover_weekly?.images[0].url} alt='' />
        <div className='body__infoText'>
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>

      <div className='body__songs'>
        <div className='body__icons'>
          <MdPlayCircleFilled className="body__shuffle margin" />
          <MdFavorite fontSize="x-large" className="margin" />
          <MdMoreHoriz />
        </div>

        {discover_weekly?.tracks.items.map((item) => (
          <SongRow track={item.track} />
        ))}
      </div>


    </div>
  )
}

export default Body