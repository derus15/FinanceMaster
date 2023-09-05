import React, {useState} from 'react';
import {Box, Button, Container, Grid, Paper, TextField} from "@mui/material";

const Sidebar = () => {

    const [moneyInvest, setMoneyInvest] = useState(50);

    const incrementMoney = () => {
        if (moneyInvest >= 0) {
            setMoneyInvest(prevState => prevState + 50);
        }
    }

    const decrementMoney = () => {
        if (moneyInvest >= 0) {
            setMoneyInvest(prevState => prevState - 50);
        }

    }

    const inputInvest = (e) => {
        setMoneyInvest(Number(e.target.value))
    }

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
                <TextField label={'Investment'} size={'small'} value={moneyInvest} margin="normal"
                           sx={{bgcolor: 'white'}} onInput={inputInvest}/>
                <Grid container justifyContent={'center'} gap={'5px'}>
                    <Button variant="outlined" sx={{width: '39%'}} onClick={incrementMoney}>+</Button>
                    <Button variant="outlined" sx={{width: '39%'}} onClick={decrementMoney}>-</Button>
                </Grid>
                <Grid container sx={{mt: '200px'}} direction={"column"} alignContent={'center'}>
                    <Button variant="outlined" sx={{
                        width: '224px',
                        marginBottom: '10px',
                        bgcolor: '#09AB19FF',
                        color: 'white',
                        height: '50px'
                    }}>Up</Button>
                    <Paper sx={{width: '224px', height: '65px', fontSize: '23px', marginBottom: '10px'}}>Payout:<br/>120$</Paper>
                    <Button variant="outlined"
                            sx={{width: '224px', backgroundColor: 'red', color: 'white', height: '50px'}}>Down</Button>
                </Grid>
                <div style={{
                    position: 'fixed',
                    bottom: '0',
                    fontSize: '15px',
                    width: '280px',
                    paddingBottom: '10px'
                }}>Все права защищены
                </div>
            </Box>
        </Container>

    );
};

export default Sidebar;