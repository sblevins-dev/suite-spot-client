import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Navbar from './components/Navbar';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import HomeContact from './components/HomeContact';
import { useState } from 'react';
import { _get } from './axios/api';
import Main from './components/Main';
import { Box } from '@mui/material';


function App() {

  const [roomList, setRoomList] = useState([]);

  // useEffect(() => {
  //   fetchData();
  // }, [])

  // const fetchData = async () => {
  //   try {
  //     const response = await _get('/api/v1/rooms');
  //     setRoomList(response.data);
  //     console.log(response.data)
  //   } catch (error) {
  //     console.log('Error fetching data: ', error)
  //   }
  // }

  return (
    <Box
      sx={{
        backgroundColor: "#efefef",
        minHeight: 'calc(100vh - 60px)',
        display: 'flex',
        marginTop: '60px',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}
    >
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Navbar />
        <Main />
        <HomeContact />
      </LocalizationProvider>
    </Box>
  );
}

export default App;
