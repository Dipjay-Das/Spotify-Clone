import React from 'react';
import './header.css'
import { Avatar } from '@material-ui/core';
import { IoSearch } from "react-icons/io5";
import { useStateValue } from "./StateProvider";


function Header(spotify) {
    const [{ user }, dispatch] = useStateValue();

    return (
        <div className='header'>
            <div className='header__left'>
                <IoSearch className='searchIcon'/>
                <input
                    placeholder="Search for Artists, Songs, or Podcasts "
                    type="text"
                />
            </div>
            <div className='header__right'>
                <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
                <h4>{user?.display_name}</h4>
            </div>
        </div>
    )

}

export default Header