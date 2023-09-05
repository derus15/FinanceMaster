import React, {useState} from 'react';
import {Box, Button, Container, Grid, Paper, TextField} from "@mui/material";

const Sidebar = ({price}) => {

    const [moneyInvest, setMoneyInvest] = useState(50);
    const [timeInvest, setTimeInvest] = useState(10);
    const [uPrice, setUPrice] = useState(0);

    const incrementMoney = () => {
        if (moneyInvest >= 0) {
            setMoneyInvest(prevState => prevState + 50);
        }
    }

    const decrementMoney = () => {
        if (moneyInvest > 0) {
            setMoneyInvest(prevState => prevState - 50);
        }
    }

    const incrementTime = () => {
        if (timeInvest >= 0) {
            setTimeInvest(prevState => prevState + 1);
        }
    }

    const decrementTime = () => {
        if (timeInvest > 0) {
            setTimeInvest(prevState => prevState - 1);
        }
    }

    const inputInvest = (e) => {
        setMoneyInvest(Number(e.target.value))
    }

    const generatePayout = () => {
        return moneyInvest * 1.5
    }

    const savePrice = () => {
        if (uPrice === 0){
            setUPrice(price);
        }
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
                           sx={{bgcolor: 'white', borderRadius: '5px'}} onInput={inputInvest}/>
                <Grid container justifyContent={'center'} gap={'5px'}>
                    <Button variant="outlined" sx={{width: '39%'}} onClick={incrementMoney}>+</Button>
                    <Button variant="outlined" sx={{width: '39%'}} onClick={decrementMoney}>-</Button>
                </Grid>
                <TextField label={'Time'} size={'small'} value={timeInvest} margin="normal"
                           sx={{bgcolor: 'white', borderRadius: '5px'}} onInput={inputInvest}/>
                <Grid container justifyContent={'center'} gap={'5px'}>
                    <Button variant="outlined" sx={{width: '39%'}} onClick={incrementTime}>+</Button>
                    <Button variant="outlined" sx={{width: '39%'}} onClick={decrementTime}>-</Button>
                </Grid>

                <Paper sx={{width:'224px', height:'80px', marginLeft:'28px', mt: '55px', fontSize:'22px', pt:'5px', boxSizing:'border-box'}}>
                    Your: {uPrice}<br/>Current: {price}
                </Paper>

                <Grid container sx={{mt: '70px'}} direction={"column"} alignContent={'center'}>
                    <Button variant="outlined" sx={{
                        width: '224px',
                        marginBottom: '10px',
                        bgcolor: '#09AB19FF',
                        color: 'white',
                        height: '50px',
                        ':hover': {
                            bgcolor: 'rgba(9,171,25,0.87)',
                            color: 'white',
                        },
                    }}
                    onClick={savePrice}>Up</Button>
                    <Paper sx={{width: '224px', height: '65px', fontSize: '23px', marginBottom: '10px'}}>Payout:<br/>{generatePayout()}</Paper>
                    <Button variant="outlined" sx={{
                        width: '224px',
                        backgroundColor: 'red',
                        color: 'white',
                        height: '50px',
                        ':hover': {
                        bgcolor: 'rgba(255,0,0,0.89)',
                        color: 'white',
                        },
                    }}
                    onClick={savePrice}>Down</Button>
                </Grid>
                <div style={{
                    position: 'fixed',
                    bottom: '0',
                    fontSize: '15px',
                    width: '280px',
                    paddingBottom: '10px'
                }}>Application in passive development
                </div>
            </Box>
        </Container>

    );
};

export default Sidebar;