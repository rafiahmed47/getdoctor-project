import * as React from 'react';
import { Grid } from '@mui/material';
import Calender from '../../../Shared/Calender/Calender';
import Appointments from '../Appointments/Appointments';

const DashboardHome = () => {
    const [date, setDate] = React.useState()

    return (
        <Grid container spacing={2}>
        <Grid item xs={4}>
          <Calender
            date={date}
            setDate={setDate}
          />
        </Grid>
        <Grid item xs={8}>
          <Appointments
            date={date}
          />
        </Grid>
      </Grid>
    );
};

export default DashboardHome;