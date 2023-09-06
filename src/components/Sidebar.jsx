import React, {useEffect, useState, useRef} from 'react';
import {Box, Button, Container, Grid, Paper} from "@mui/material";
import MoneyIndicator from "./MoneyIndicator";
import TimeIndicator from "./TimeIndicator";

const Sidebar = ({price, balance, setBalance}) => {

    const [moneyInvest, setMoneyInvest] = useState(50);
    const [timeInvest, setTimeInvest] = useState(5);
    const [uPrice, setUPrice] = useState(0);
    const [progress, setProgress] = useState(false);
    const [resultText, setResultText] = useState('Make a bet');

    const priceRef = useRef(price);
    const uPriceRef = useRef(0);

    useEffect(() => {
        priceRef.current = price;
    }, [price]);

    const generatePayout = () => {
        return moneyInvest * 1.2
    };

    const savePriceUp = () => {

        if (!progress && timeInvest !== 0 && moneyInvest !== 0) {

            uPriceRef.current = priceRef.current;
            setUPrice(priceRef.current);
            setProgress(true);
            setResultText('Waiting');

            setTimeout(() => {

                checkResultUP();
                resetSidebar();

            }, timeInvest * 2500)
        }
    };

    const savePriceDown = () => {

        if (!progress && timeInvest !== 0 && moneyInvest !== 0) {

            uPriceRef.current = priceRef.current;
            setUPrice(priceRef.current);
            setProgress(true);
            setResultText('Waiting');

            setTimeout(() => {

                checkResultDOWN();
                resetSidebar();

            }, timeInvest * 2500);
        }
    };

    const resetSidebar = () => {
        setTimeout(() => {
            setResultText('Make a bet');
            setUPrice(0);
        }, 1800);
    };

    const checkResultUP = () => {

        setProgress(prevState => !prevState);

        if (priceRef.current > uPriceRef.current) {

            setBalance(prev => prev + generatePayout())
            setResultText('You Won ' + generatePayout());

        } else {

            setBalance(prev => prev - generatePayout())
            setResultText('You Lose ' + generatePayout());

        }
    };

    const checkResultDOWN = () => {

        setProgress(prevState => !prevState);

        if (priceRef.current < uPriceRef.current) {

            setBalance(prev => prev + generatePayout())
            setResultText('You Won ' + generatePayout());

        } else {

            setBalance(prev => prev - generatePayout());
            setResultText('You Lose ' + generatePayout());

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
                <MoneyIndicator moneyInvest={moneyInvest} balance={balance} setMoneyInvest={setMoneyInvest}
                                progress={progress}/>
                <TimeIndicator timeInvest={timeInvest} setTimeInvest={setTimeInvest} progress={progress}/>

                <Paper sx={{
                    width: '224px',
                    height: '80px',
                    marginLeft: '28px',
                    mt: '30px',
                    fontSize: '22px',
                    pt: '5px',
                    boxSizing: 'border-box'
                }}>
                    Your: {uPrice}<br/>Current: {price}
                </Paper>

                <Paper sx={{
                    width: '224px',
                    height: '40px',
                    pt: '5px',
                    boxSizing: 'border-box',
                    marginLeft: '28px',
                    mt: '20px',
                    fontSize: '22px'
                }}>
                    {resultText}
                </Paper>

                <Grid container sx={{mt: '30px'}} direction={"column"} alignContent={'center'}>
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
                    }} onClick={savePriceUp}>Up</Button>
                    <Paper sx={{
                        width: '224px',
                        height: '65px',
                        fontSize: '23px',
                        marginBottom: '10px'
                    }}>Payout:<br/>{generatePayout()}</Paper>
                    <Button variant="outlined" sx={{
                        width: '224px',
                        backgroundColor: 'red',
                        color: 'white',
                        height: '50px',
                        ':hover': {
                            bgcolor: 'rgba(255,0,0,0.89)',
                            color: 'white',
                        },
                    }} onClick={savePriceDown}>Down</Button>
                </Grid>
            </Box>
        </Container>
    );
};

export default Sidebar;