import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import SearchPage from './components/SearchPage';
import AboutPage from './components/AboutPage';
import HomeContact from './components/HomeContact';
import { useEffect, useState } from 'react';
import { Context } from './context/Context';
import { _get } from './axios/api';


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
    <div className="App" style={{ backgroundColor: '#efefef' }}>
      <BrowserRouter basename="/suite-spot-client/">
        <Context.Provider value={{roomList}}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Navbar />
            <Routes>
              <Route index path="/" element={<Home />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
            <HomeContact />
          </LocalizationProvider>
        </Context.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
