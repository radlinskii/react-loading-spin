import React from 'react';
import './styles.css';

const LoadingSpin = (props) => {
    let primaryColor = '#1ecd96';
    let secondaryColor = '#cccccc';
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
                borderColor: secondaryColor,
                borderLeftColor: primaryColor,
                borderTopColor: primaryColor,
            }
        }></div>
    );
};

export default LoadingSpin;
