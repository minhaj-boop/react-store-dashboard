import React from 'react';
import { BiBrightness } from 'react-icons/bi';

const Title = ({title, subTitle}) => {
    return (
        <>
            <div className="title_container">
                <div className="title">
                    <h2>{title}</h2>
                    <h4>{subTitle}</h4>
                </div>
                <div className="icon">
                    <BiBrightness/>
                </div>
            </div>
        </>
    );
};

export default Title;