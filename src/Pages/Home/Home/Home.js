import React from 'react';
import Navigation from '../../../Shared/Navigation/Navigation';
import Banner from '../../Banner/Banner';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import DentalCare from '../DentalCare/DentalCare';
import Doctors from '../Doctors/Doctors';
import HomeInput from '../HomeInput/HomeInput';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Navigation/>
            <Banner/>
            <Services/>
            <DentalCare/>
            <AppointmentBanner/>
            <Doctors/>
            <Testimonial/>
            <HomeInput/>
        </div>
    );
};

export default Home;