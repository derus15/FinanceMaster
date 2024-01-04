import React from 'react';
import {AppBar, Typography} from "@mui/material";

const Navbar = ({balance}) => {

    return (
        <AppBar position={'static'}>
            <Typography variant="h4" sx={{ml: 3, padding:'5px', cursor:'auto',  flexGrow: 1 }}>
                Finance Master
            </Typography>
            <Typography sx={{ position:'absolute', fontSize:'30px', right:'0', padding:'2px', mr:'26px'}}>
                Balance: {balance}$
            </Typography>
        </AppBar>
    );
};

export default Navbar;