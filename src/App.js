import { BrowserRouter, Route, Routes,Link } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import About from './Pages/About';
import { ErrorPage } from './Pages/ErrorPage';

function App() {
  return (
       <BrowserRouter>
        <nav>
          <Link to ='/'>Home</Link>
          <Link to ='/about'>about</Link>
          <Link to ='/profile'>profile</Link>

        </nav>
          <Routes>
            <Route path = "/" element = {<Home />} />
            <Route path = "/about" element = {<About />} />
            <Route path = "/profile" element = {<Profile />} />
            <Route path = "*" element = {<ErrorPage />} />
          </Routes>
       </BrowserRouter>
  );
}

export default App;
