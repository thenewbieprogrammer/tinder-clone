import React from 'react'
import '../style/SwipeButtons.css';

import IconButton from '@material-ui/core/IconButton';

import RelayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavouriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';

function SwipeButtons() {
  return (
    <div className="swipeButtons">
      <IconButton className="swipeButtons__relay"><RelayIcon fontSize="large"/></IconButton>
      <IconButton className="swipeButtons__close"><CloseIcon fontSize="large"/></IconButton>
      <IconButton className="swipeButtons__star"><StarRateIcon fontSize="large"/></IconButton>
      <IconButton className="swipeButtons__favourite"><FavouriteIcon fontSize="large"/></IconButton>
      <IconButton className="swipeButtons__flashOn"><FlashOnIcon fontSize="large"/></IconButton>
    </div>
  )
}

export default SwipeButtons
