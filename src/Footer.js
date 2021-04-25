import React from 'react';
import './Footer.css';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import { VolumeDown } from '@material-ui/icons';
import { Grid, Slider } from '@material-ui/core';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';


function Footer() {
    return (
        <div className='footer'>
            <div className="footer__left">
                <img className="footer__albumLogo" src="https://images-na.ssl-images-amazon.com/images/I/81ex1HcXOPL._SL1280_.jpg" alt="" />
                <div className="footer__songInfo">
                    <h4>Viva La Vida</h4>
                    <p>Coldplay</p>
                </div>
            </div>

            <div className="footer__center">
                <ShuffleIcon className='footer__green' />
                <SkipPreviousIcon className='footer__icon' />
                <PlayCircleOutlineIcon fontSize='large' className='footer__icon' />
                <SkipNextIcon className='footer__icon' />
                <RepeatIcon className='footer__green' />
            </div>

            <div className="footer__right">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item>
                        <VolumeDown />
                    </Grid>
                    <Grid item xs>
                        <Slider />
                    </Grid>
                </Grid>
            </div >
        </div >
    )
}

export default Footer
