import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from '../src/Pages/Home/Home'
import Header from './Pages/Shared/Header';
import Footer from './Pages/Shared/Footer';
import Login from './Pages/Login/Login';

function App() {
  return (
    <div className=''>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/login" element={<Login></Login>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
