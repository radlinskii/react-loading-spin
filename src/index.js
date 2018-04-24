import React from 'react';
import './styles.css';

const LoadingSpin = (props) => {
    const {
        size = '60px',
        width = '6px',
        secondaryColor = '#cccccc',
        primaryColor = '#1ecd96',
        duration = '1.4s',
        timingFunction = 'ease-in-out',
        direction = 'normal',
    } = props;

    return (
        <div
            className="loading"
            style={
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
