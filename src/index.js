import React from 'react';
import './styles.css';

const LoadingSpin = (props) => {
    let size = '60px';
    let width = '6px';
    let secondaryColor = '#cccccc';
    let primaryColor = '#1ecd96';
    let duration = '1.4s';

    if(props.size){
        size = props.size;
    }
    if(props.width){
        width = props.width;
    }
    if(props.duration){
        duration = props.duration;
    }
    if(props.secondaryColor){
        secondaryColor = props.secondaryColor;
    }
    if(props.primaryColor){
        primaryColor = props.primaryColor;
    }

    return (
        <div
            className="loading"
            style = {
            {
                height: size,
                width: size,
                borderWidth: width,
                animationDuration: duration,
                borderColor: secondaryColor,
                borderLeftColor: primaryColor,
                borderTopColor: primaryColor,
            }
        }></div>
    );
};

export default LoadingSpin;
