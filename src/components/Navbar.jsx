import React from 'react';
import {AppBar, Typography} from "@mui/material";

const Navbar = () => {
    return (
        <div>
            <AppBar position={'static'}>
                <Typography variant="h4" sx={{ml: 3, padding:'5px'}}>
                    MoneyMaker
                </Typography>
            </AppBar>
        </div>
    );
};

export default Navbar;