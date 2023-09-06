import React from 'react';
import {Button, Grid, TextField} from "@mui/material";

const TimeIndicator = ({timeInvest, setTimeInvest, progress}) => {

    const incrementTime = () => {
        if (timeInvest >= 0 && !progress) {
            setTimeInvest(prevState => prevState + 1);
        }
    };

    const decrementTime = () => {
        if (timeInvest > 0 && !progress) {
            setTimeInvest(prevState => prevState - 1);
        }
    };

    const inputInvest = (e) => {
        setTimeInvest(Number(e.target.value))
    };

    return (
        <>
            <TextField label={'Time'} size={'small'} type={'number'} value={timeInvest} margin="normal"
                       sx={{bgcolor: 'white', borderRadius: '5px'}} onInput={inputInvest}/>
            <Grid container justifyContent={'center'} gap={'5px'}>
                <Button variant="outlined" sx={{width: '39%'}} onClick={incrementTime}>+</Button>
                <Button variant="outlined" sx={{width: '39%'}} onClick={decrementTime}>-</Button>
            </Grid>
        </>
    );
};

export default TimeIndicator;