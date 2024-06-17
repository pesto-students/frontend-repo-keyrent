import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
}  from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './store.jsx';
//import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/styles/bootstrap.custom.css';
import './assets/styles/index.css'
import App from './App.jsx'
import HomeScreen from './screens/homesreen.jsx';
import ProductScreen from './screens/productScreen.jsx';
import CartScreen from './screens/cartScreen.jsx';
import LoginScreen from './screens/loginScreen.jsx';
import RegisterScreen from './screens/RegisterScreen.jsx';
const router = createBrowserRouter (
  createRoutesFromElements(
 <Route path='/' element={<App/>}>
  <Route index={true} path='/'element={<HomeScreen/>}/>
  <Route path='/product/:id'element={<ProductScreen/>}/>
  <Route path='/cart'element={<CartScreen/>}/>
  <Route path='/login'element={<LoginScreen/>}/>
  <Route path='/register'element={<RegisterScreen/>}/>
 </Route>
  )
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router = {router}/>
    </Provider>
  </React.StrictMode>,
);
