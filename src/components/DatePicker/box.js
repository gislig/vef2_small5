import React from 'react';
import propTypes from 'prop-types';
import styles from './box.css';
import FontAwesome from "react-fontawesome";


const Box = ({onClick, icon, children}) => {
    return (
        <div className={`${styles.wrapper}`}>
            <div className={`${styles.content}`} onClick={() => onClick()}>
                <FontAwesome className={`${styles.icon}`} aria-hidden='false' name={icon}/>
                {children}
            </div>
        </div>
    );
};

Box.propTypes = {
    onClick: propTypes.func.isRequired,
    icon: propTypes.string.isRequired
};


export default Box