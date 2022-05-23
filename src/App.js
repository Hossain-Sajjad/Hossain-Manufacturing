import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from '../src/Pages/Home/Home'
import Header from './Pages/Shared/Header';
import Footer from './Pages/Shared/Footer';

function App() {
  return (
    <div className='app'>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
