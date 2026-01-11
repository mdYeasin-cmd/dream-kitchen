import React from 'react';

const ReusableButton = ({ bgColor, onClick, type = 'button', className = '', style = {}, children, ...rest }) => {
    const mergedStyle = { ...style };

    if (bgColor) {
        mergedStyle.backgroundColor = bgColor;
        mergedStyle.borderColor = bgColor;
    }

    return (
        <button
            type={type}
            onClick={onClick}
            className={className}
            style={mergedStyle}
            {...rest}
        >
            {children}
        </button>
    );
};

export default ReusableButton;
