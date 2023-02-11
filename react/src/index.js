import React from 'react';
import ReactDOM from 'react-dom/client';
import ProductList from './components/ProductList';
import AddProduct from './components/AddProduct';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ProductList />} />
          <Route path="/add-product" element={<AddProduct />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}


root.render(
    <App />
);