import React from 'react';
import './ScreenReaderText.css';

type ScreenReaderTextProps = {
    text: string
};

const ScreenReaderText = ({text}: ScreenReaderTextProps) => {
    return (
        <div className="screen-reader-text">
            {text}
        </div>
    );
}

export default ScreenReaderText;