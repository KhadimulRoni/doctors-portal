import { Container, Grid } from '@mui/material';
import React from 'react';
import chair from '../../../images/chair.png';
import Calander from '../../Shared/Calander/Calander';

const AppointmentHeader = ({date, setDate}) => {
    return (
        <div>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Calander date={date} setDate={setDate}></Calander>

                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img style={{width:"100%"}} src={chair} alt="" />
                    </Grid>
                </Grid>

            </Container>
        </div>
    );
};

export default AppointmentHeader;