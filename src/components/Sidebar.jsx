import React from 'react';
import {Box, Button, Container, Grid, Paper, TextField} from "@mui/material";

const Sidebar = () => {
    return (
        <Container maxWidth="sm">
            <Box sx={{
                bgcolor: '#cfe8fc',
                width: '280px',
                height: '94vh',
                position: 'fixed',
                right: '0',
                textAlign: 'center'
            }}>
                <TextField label={'Investment'} size={'small'} margin="normal" sx={{bgcolor: 'white'}}/>
                <Grid container justifyContent={'center'} gap={'5px'}>
                    <Button variant="outlined" sx={{width: '39%'}}>+</Button>
                    <Button variant="outlined" sx={{width: '39%'}}>-</Button>
                </Grid>
                <Grid container sx={{mt: '50px'}} direction={"column"} alignContent={'center'}>
                    <Button variant="outlined" color="success" sx={{
                        width: '224px',
                        marginBottom: '10px',
                        bgcolor: '#09AB19FF',
                        color: 'white'
                    }}>Up</Button>
                    <Paper sx={{width: '224px', height: '65px', fontSize: '23px', marginBottom: '10px'}}>Payout:<br/>120$</Paper>
                    <Button variant="outlined" sx={{width: '224px', backgroundColor: 'red', color:'white'}}
                            color="error">Down</Button>
                </Grid>
            </Box>

        </Container>

    );
};

export default Sidebar;