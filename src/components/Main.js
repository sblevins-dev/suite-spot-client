import SearchPage from './SearchPage';
import AboutPage from './AboutPage';
import Home from './Home';
import { Route, Routes } from 'react-router-dom'
import ContactPage from './ContactPage';

const Main = () => {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
        </>
    )
}

export default Main