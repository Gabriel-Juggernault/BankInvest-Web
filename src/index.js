import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from "./componentes/Tela_inicial/Tela_inicial" 
import Login from './componentes/Login/Login';
import Cadastro from './componentes/Cadastro/cadastro';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Login/>
  </React.StrictMode>
);

reportWebVitals();
