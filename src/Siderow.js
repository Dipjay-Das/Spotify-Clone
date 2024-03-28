import React from 'react';
import './siderow.css';
import SiderowOption from './SiderowOption';
import { FaHome } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { MdLibraryMusic } from "react-icons/md";
import { useStateValue } from "./StateProvider";
import Playlist from './Playlist'




function Siderow() {
  const [{ playlists }, dispatch] = useStateValue();
  console.log(playlists)
  return (
    <div className='siderow'>
      <img
        className="siderow_logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <SiderowOption title='Home' Icon={FaHome} />
      <SiderowOption title='Search' Icon={FaSearch} />
      <SiderowOption title='Your Library' Icon={MdLibraryMusic} />

      <br />
      <strong className='siderow__title'>PLAYLISTS</strong>
      <hr />
      {/* {playlists?.items?.map((playlist) => (
        <Playlist img={playlist.images} title={playlist.name}/>
      ))} */}
      <div className='siderow__footer'>
        {playlists?.items?.map((playlist) => (
          <Playlist img={playlist.images} title={playlist.name} />
        ))}
      </div>
    </div>
  )
}

export default Siderow