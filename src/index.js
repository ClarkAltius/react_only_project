import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; 
import App from './App'; //App.js 파일ㅇ을 의미
import reportWebVitals from './reportWebVitals';

//리액트 라우터를 사용하기 위해서 browserrouter 를 app 외부에 감싸 주는 역할
//App.js 파일을 index.js 파일이 포함하고 있음으로 BrowserRouter는 index.js파일에 한번만 명시.

import { BrowserRouter } from 'react-router-dom'; //추가

const root = ReactDOM.createRoot(document.getElementById('root'));

// StrictMode는 개발 도중 발생할 수 있는 문제를 꼼꼼히 감지하기 위하여 렌더링을 2번 실행한다.
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
