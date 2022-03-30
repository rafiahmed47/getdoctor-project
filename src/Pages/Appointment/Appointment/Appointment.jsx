import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentHeader from '../AppointmentHeader/ AppointmentHeader';
import AvailableAppointment from '../AvailableApointments/AvailableAppointment';

const Appointment = () => {
    return (
        <div>
            <Navigation/>
            <AppointmentHeader/>
            <AvailableAppointment/>
        </div>
    );
};

export default Appointment;