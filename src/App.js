import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from '../src/Pages//Home/Home'
import Header from './Pages/Shared/Header';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import AddTools from './Pages/AddProduct/AddTools';
import RequireAuth from './Pages/Login/RequireAuth';
import PurchaseTools from './Pages/PurchaseTools/PurchaseTools';

function App() {
  return (
    <div className=''>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/home" element={<Home></Home>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/register" element={<Register></Register>} />
        <Route path="/tool" element={<AddTools></AddTools>} />
        <Route path="/home/:id" element={
          <RequireAuth>
            <PurchaseTools></PurchaseTools>
          </RequireAuth>
        } />
      </Routes>
    </div>
  );
}

export default App;
