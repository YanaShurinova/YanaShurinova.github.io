import React from 'react';
import sklad_photo2 from "../../images/sklad2.jpg";
import classes from './Introduction.module.css'

const Introduction = ({mainString,subString, button}) => {
    return (
        <div className={classes.container}>
            <div className={classes.container__photo}><img src={sklad_photo2} alt="sklad"/></div>
            <div className={classes.inner_text}>
                <div className={classes.palleton}>{mainString}<br/></div>
                <div className={classes.subPalleton}>{subString}</div>
                <div className={classes.myButton}>
                    <a href="https://t.me/palleton_bot">{button}</a>
                </div>

            </div>
        </div>
    );
};

export default Introduction;