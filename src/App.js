import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Profile from './pages/Profile';
import Home from './pages/Home';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './pages/Login'
import Join from './pages/Join'

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/profile" element={<Profile></Profile>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/join" element={<Join></Join>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
