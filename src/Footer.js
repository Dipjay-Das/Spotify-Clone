import React, {useEffect} from 'react';
import './footer.css';
import { IoPlayCircleOutline } from "react-icons/io5";
import { MdSkipPrevious } from "react-icons/md";
import { MdSkipNext } from "react-icons/md";
import { IoShuffle } from "react-icons/io5";
import { IoIosRepeat } from "react-icons/io";
import { Grid, Slider } from "@material-ui/core";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import { useStateValue } from "./StateProvider";

function Footer({ spotify }) {
  const [{ item }, dispatch] = useStateValue();

  useEffect(() => {
  spotify.getMyCurrentPlaybackState().then((data) => {
    console.log(data)

    dispatch({
      type : "SET_ITEM",
      item : data.item
    });
  });
}, []);

  return (
    <div className='footer'>
      <div className='footer__left'>
        <img className='footer__albumLogo' src={item?.album.images[0].url} alt='' />
        <div className='footer__songInfo'>
          <h4>{item?.name}</h4>
          <p>{item?.artists.map((artist) => artist.name).join(",  ")}</p>
        </div>
      </div>

      <div className='footer__center'>
        <IoShuffle className='footer__green' />
        <MdSkipPrevious className='footer__icon' />
        <IoPlayCircleOutline fontSize="xx-large" className="footer__icon" />
        <MdSkipNext className="footer__icon" />
        <IoIosRepeat className="footer__green" />
      </div>

      <div className='footer__right'>
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider aria-labelledby="continuous-slider" />
          </Grid>
        </Grid>
      </div>

    </div>
  )
}

export default Footer