import React, {useEffect, useState, useRef, createContext} from 'react';
import {Box, Button, Grid, Paper} from "@mui/material";
import MoneyIndicator from "../MoneyIndicator";
import TimeIndicator from "../TimeIndicator";
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
        <Box className={style.sidebarContainer}>
            <StatContext.Provider value={state}>
                <MoneyIndicator/>
                <TimeIndicator/>
            </StatContext.Provider>

            <Paper className={style.userScore}>
                Your: {uPrice}<br/>Current: {price}
            </Paper>

            <Paper className={style.userScore}>
                {resultText}
            </Paper>

            <Grid container sx={{mt: '30px', }} direction={"column"} alignContent={'center'}>
                <Button variant="contained" color="success" onClick={savePriceUp}>
                    Up
                </Button>
                <Paper sx={{
                    width: '224px',
                    height: '65px',
                    mb: '10px',
                    mt:'10px'
                }}>
                    Payout:<br/>{generatePayout()}
                </Paper>
                <Button variant="contained" color='error' onClick={savePriceDown}>Down</Button>
            </Grid>
        </Box>
    );
};

export default Sidebar;