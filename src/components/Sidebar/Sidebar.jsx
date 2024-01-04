import React, {useEffect, useState, useRef, createContext} from 'react';
import {Box, Button, Grid, Paper} from "@mui/material";
import MoneyIndicator from "../Indicators/MoneyIndicator";
import TimeIndicator from "../Indicators/TimeIndicator";
import style from './Sidebar.module.css';

export const StatContext = createContext();

const Sidebar = ({price, balance, setBalance}) => {

    const [moneyInvest, setMoneyInvest] = useState(50);
    const [timeInvest, setTimeInvest] = useState(5);
    const [uPrice, setUPrice] = useState(0);
    const [progress, setProgress] = useState(false);
    const [resultText, setResultText] = useState('Make a bet');

    const priceRef = useRef(price);
    const uPriceRef = useRef(0);

    const state = {moneyInvest, setMoneyInvest, timeInvest, setTimeInvest, progress, balance}

    useEffect(() => {
        priceRef.current = price;
    }, [price]);

    const checkResult = (direction) => {
        setProgress(prevState => !prevState);

        if ((direction === 'UP' && priceRef.current > uPriceRef.current) ||
            (direction === 'DOWN' && priceRef.current < uPriceRef.current)) {
            setBalance(prev => prev + moneyInvest);
            setResultText('You Won ' + moneyInvest);
        } else {
            setBalance(prev => prev - moneyInvest);
            setResultText('You Lose ' + moneyInvest);
        }
    };

    const savePriceUp = () => {

        if (!progress && timeInvest !== 0 && moneyInvest !== 0) {

            uPriceRef.current = priceRef.current;
            setUPrice(priceRef.current);
            setProgress(true);
            setResultText('Waiting');

            setTimeout(() => {

                checkResult('UP');
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

                checkResult('DOWN');
                setMoneyInvest(0);
                resetSidebar();

            }, timeInvest * 2500);
        }
    };

    const resetSidebar = () => {
        setTimeout(() => {
            setResultText('Make a bet');
            setUPrice(0);
        }, 1500);
    };

    return (
        <Box className={style.sidebarContainer}>
            <StatContext.Provider value={state}>
                <MoneyIndicator/>
                <TimeIndicator/>
            </StatContext.Provider>

            <Paper className={style.userScore}>
                Your: {uPrice}<br/>Current: {price}
            </Paper>

            <Paper className={style.userScore} sx={{height: '45px'}}>
                {resultText}
            </Paper>

            <Grid container sx={{mt: '20%'}} direction={"column"} alignContent={'center'}>
                <Button variant="contained" color="success" onClick={savePriceUp}>
                    Up
                </Button>
                <Paper sx={{
                    width: '224px',
                    height: '65px',
                    mb: '10px',
                    mt:'10px'
                }}>
                    Payout:<br/>{moneyInvest}
                </Paper>
                <Button variant="contained" color='error' onClick={savePriceDown}>Down</Button>
            </Grid>
        </Box>
    );
};

export default Sidebar;