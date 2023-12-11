// CustomAlert.js
import React from 'react';

const CustomAlert = ({ message }) => {
    return (
        <div className="alert">
            <div className="alert__title">{message}</div>
        </div>
    );
};

export default CustomAlert;
