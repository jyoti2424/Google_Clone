import React from 'react'
import { Link } from "react-router-dom";
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar } from '@material-ui/core';
import Search from './Search';
import './Home.css'
function Home() {
  return (
    <div className='home'>
      <div className='home_header'>
        <div className='home_headerLeft'>
          <Link to='/about'>About</Link>
          <Link to='/store'>Store</Link>
        </div>
        <div className='home_headerRight'>
          <Link to='/gmail'>Gmail</Link>
          <Link to='/images'>Images</Link>
          <AppsIcon />
          <Avatar />

        </div>

      </div>
      <div className='home_body'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Google_2011_logo.png/640px-Google_2011_logo.png' />
        <div className='inputContainer'>
        <Search />
        </div>
      </div>
    </div>
  )
}

export default Home