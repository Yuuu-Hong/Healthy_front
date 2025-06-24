import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import './styles/main.css';

function App() {
    return (
        <Router>
            <div className="App">
                <h1>User Management System</h1>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/users" element={<UserList />} />
                    <Route path="/user-form" element={<UserForm />} />
                    <Route path="/" element={<h2>Welcome to the User Management System</h2>} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;