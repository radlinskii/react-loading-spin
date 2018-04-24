import React from 'react';
import './styles.css';

const LoadingSpin = (props) => {
    let size = '60px';
    let width = '6px';
    let primaryColor = '#1ecd96';
    let secondaryColor = '#cccccc';

    if(props.size){
        size = props.size;
    }
    if(props.width){
        width = props.width;
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
                borderColor: secondaryColor,
                borderLeftColor: primaryColor,
                borderTopColor: primaryColor,
            }
        }></div>
    );
};

export default LoadingSpin;
