import React from 'react';
import './playlist.css'

function Playlist({ title, img }) {
    // console.log(title)
    // console.log(img)
    return (
        <div className='playlist'>
            <img src={img[0].url} alt='' />
            <p>{title}</p>
        </div>

    )
}

export default Playlist