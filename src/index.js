import React from 'react';
import './styles.css';

const LoadingSpin = (props) => {
    let primaryColor = '#1ecd96';
    let secondaryColor = '#cccccc';
    let scale = 1.0;

    if(props.secondaryColor){
        secondaryColor = props.secondaryColor;
    }
    if(props.primaryColor){
        primaryColor = props.primaryColor;
    }
    if(props.scale){
        scale = props.scale;
    }

    return (
        <div
            className="loading"
            style = {
            {
                transform: `scale(${scale})`,
                borderColor: secondaryColor,
                borderLeftColor: primaryColor,
                borderTopColor: primaryColor,
            }
        }></div>
    );
};

export default LoadingSpin;
