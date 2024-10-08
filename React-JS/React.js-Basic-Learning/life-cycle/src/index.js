import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import Tick from './Life-Cycle/Tick';
import reportWebVitals from './reportWebVitals';

function MyTick() {
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      {/* <App /> */}
      <Tick/>
    </React.StrictMode>
  );
}

setInterval(MyTick, 2000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
