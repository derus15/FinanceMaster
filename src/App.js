import './App.css';
import {Box} from "@mui/material";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Chart from "./components/Charts/Chart";

function App() {


  return (
    <Box sx={{flexGrow: 1}}>
        <Navbar/>
        <Sidebar/>
        <Chart/>
    </Box>
  );
}

export default App;
