import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from '../src/Pages/Home/Home'
import Header from './Pages/Shared/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>} />
      </Routes>
    </div>
  );
}

export default App;
