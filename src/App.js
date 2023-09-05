import './App.css';
import {Box} from "@mui/material";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Chart from "./components/Charts/Chart";
import {useEffect, useState} from "react";

function App() {

    const [price, setPrice] = useState(Math.floor(Math.random() * 30) + 1);

    useEffect(() => {
        const interval = setInterval(() => {
            setPrice(Math.floor(Math.random() * 35) + 1);
        }, 1600)
        return () => clearInterval(interval)
    }, [price])

    return (
        <Box sx={{flexGrow: 1}}>
            <Navbar/>
            <Sidebar price={price}/>
            <Chart price={price}/>
        </Box>
    );
}

export default App;
