import React from 'react';
import './styles.css';

const LoadingSpin = (props) => {
    let size = '60px';
    let width = '6px';
    let secondaryColor = '#cccccc';
    let primaryColor = '#1ecd96';
    let duration = '1.4s';
    let timingFunction = 'ease-in-out';
    let direction = 'normal';

    if(props.size){
        size = props.size;
    }
    if(props.width){
        width = props.width;
    }
    if(props.duration){
        duration = props.duration;
    }
    if(props.timingFunction){
        timingFunction = props.timingFunction;
    }
    if(props.direction){
        direction = props.direction;
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
                animationTimingFunction: timingFunction,
                animationDirection: direction,
                borderColor: secondaryColor,
                borderLeftColor: primaryColor,
                borderTopColor: primaryColor,
            }
        }></div>
    );
};

export default LoadingSpin;
