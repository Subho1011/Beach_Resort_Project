// import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Home/>
    </>
  );
}

export default App;


{/* <Routes>
  <Route exact path="/" element={<Home />} />
  <Route path="/rooms" element={<Rooms />} />
  <Route path="/rooms/:slug" element={<SingleRoom />} />
</Routes> */}