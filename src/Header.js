import { Avatar } from '@material-ui/core';
import logo from './logo.png';
import { makeStyles } from '@material-ui/core/styles';
import './Header.css'
import React from 'react';

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  }
}));

function Header() {
  const classes = useStyles();

  return (
    <div className='header'>
      <img 
        className='header__logo'
        src={logo}
        alt='Logo'
      />
      <h1>Schedule A Meeting</h1>
      <span className='header__user'><h3>Hello John!</h3> <Avatar alt='John Doe' src='https://franchisematch.com/wp-content/uploads/2015/02/john-doe.jpg' className={classes.large}/></span>
    </div>
  );
}

export default Header;
