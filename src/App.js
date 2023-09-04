import './App.css';
import {Box} from "@mui/material";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {


  return (
    <Box sx={{flexGrow: 1}}>
        <Navbar/>
        <Sidebar/>
    </Box>
  );
}

export default App;
