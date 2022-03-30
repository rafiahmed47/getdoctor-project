import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Appointmentbanner from '../Appointmentbanner/Appointmentbanner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Navigation/>
            <Services/>
            <Appointmentbanner/>
        </div>
    );
};

export default Home;