import SearchPage from './SearchPage';
import AboutPage from './AboutPage';
import Home from './Home';
import { Route, Routes } from 'react-router-dom'

const Main = () => {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/about" element={<AboutPage />} />
            </Routes>
        </>
    )
}

export default Main