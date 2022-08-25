<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
=======
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
>>>>>>> bd776c74b4161b3b4241db498131e19f8efa1e53

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<<<<<<< HEAD

  <App />

=======
  <BrowserRouter>
    <App/>
  </BrowserRouter>
>>>>>>> bd776c74b4161b3b4241db498131e19f8efa1e53
);
