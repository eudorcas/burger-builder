import React from 'react';
import image from '../../assets/images/burger-logo.png';
import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={image} alt={"Burger"}/>
    </div>
);

export default logo;