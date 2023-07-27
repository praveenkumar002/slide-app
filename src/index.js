import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './component/App';
import reportWebVitals from './reportWebVitals';
import SlideProvider from './component/SlideProvider';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Level from './component/Level';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<SlideProvider/>}></Route>
      <Route path='/level' element={<Level />}></Route>
      <Route path='/slide' element={<SlideProvider />  }></Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


