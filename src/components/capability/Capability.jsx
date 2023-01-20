import React from 'react';
import cl from './Capability.module.css'

const Capability = ({path,mainString,subString}) => {
    return (
        <div className={cl.capabilities_img}>
            <img src={path} alt="" style={{width:'120px', height:'110px'}}/>
            <div>{mainString}</div>
            <p>{subString}</p>
        </div>
    );
};

export default Capability;