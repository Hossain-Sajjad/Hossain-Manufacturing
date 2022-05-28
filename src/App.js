import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from '../src/Pages//Home/Home'
import Header from './Pages/Shared/Header';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import AddTools from './Pages/AddProduct/AddTools';
import RequireAuth from './Pages/Login/RequireAuth';
import PurchaseTools from './Pages/PurchaseTools/PurchaseTools';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyProfile from './Pages/Dashboard/MyProfile';
import MyOrders from './Pages/Dashboard/MyOrders';
import AddReview from './Pages/Dashboard/AddReview';

function App() {
  return (
    <div className=''>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="home" element={<Home></Home>} />
        <Route path="login" element={<Login></Login>} />
        <Route path="register" element={<Register></Register>} />
        <Route path="tool" element={<AddTools></AddTools>} />
        <Route path="home/:id" element={
          <RequireAuth>
            <PurchaseTools></PurchaseTools>
          </RequireAuth>
        } />
        <Route path="dashboard" element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        } >
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path='myorders' element={<MyOrders></MyOrders>}></Route>
          <Route path='addreview' element={<AddReview></AddReview>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
