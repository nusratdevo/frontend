import React from "react";
import './App.css';

import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddTutorial from "./components/AddTutorial";
import Tutorial from "./components/Tutorial";
import TutorialsList from "./components/TutorialsList";
import Dashboard from './components/Dashboard';
import AuthUser from './components/AuthUser';
import AddMovie from "./AddMovie";
import Login from './components/login';
import Register from './components/register';
import Home from './components/Home';
function App() {
  const {getToken} = AuthUser();
  const {token,logout} = AuthUser();
  const logoutUser = () => {
      if(token != undefined){
          logout();
      }
  }
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/" className="navbar-brand">
          Homme
        </a>
        if (!getToken()) {
          
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">Register</Link>
              </li>
            </ul>
          
        }else{
          
          <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/dashboard">Dashboard</Link>
                    </li>
                    <li className="nav-item">
                        <span role="button" className="nav-link" onClick={logoutUser}>Logout</span>
                    </li>
            </ul>
          
        }
      </nav>

      <div className="container mt-3">
        <Routes>
          <Route path="/nn" element={<AddMovie/>} />
          <Route path="/ss" element={<TutorialsList/>} />
          <Route path="/tutorials" element={<TutorialsList/>} />
          <Route path="/add" element={<AddTutorial/>} />
          <Route path="/tutorials/:id" element={<Tutorial />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
