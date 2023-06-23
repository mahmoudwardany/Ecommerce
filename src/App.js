
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './pages/Cart';
import Home from './pages/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Register from './pages/Register';
import Login from './pages/Login';
import CategoriesItem from './components/CategoriesItem';
import AuthProvider from './context/context';
import RequireAuth from './context/RequireAuth'
import CheckOut from './components/CheckOut';

function App() {
  return (

    <div className='App'>
      <BrowserRouter>
        <ToastContainer />
        <AuthProvider>
          <Routes>
            <Route path='/ecommerce' element={
              <RequireAuth><Home /></RequireAuth>
            } />
            <Route path='cart' element={
              <RequireAuth> <Cart /></RequireAuth>
            } />
            <Route path='ecommerce/:item' element={<CategoriesItem />} />
            <Route path='register' element={<Register />} />
            <Route path='login' element={<Login />} />
            <Route path='checkout' element={<CheckOut />} />

          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>


  );
}

export default App;
