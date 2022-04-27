import React from 'react';
import ErrorImg from '../../images/error.gif'

const NoRoute = () => {
    return (
        <div>
            <img src={ErrorImg} style={{width: '100%', height: '100vh'}} alt=""/>
        </div>
    );
};

export default NoRoute;