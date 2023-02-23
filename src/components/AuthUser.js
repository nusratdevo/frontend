import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AuthUser(){
    const navigate = useNavigate();

    const getToken = () =>{
        const tokenString = sessionStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        return userToken;
    }

    const getUser = () =>{
        const userString = sessionStorage.getItem('user');
        const user_detail = JSON.parse(userString);
        return user_detail;
    }



    const [token,setToken] = useState(getToken());
    const [user,setUser] = useState(getUser());

    const saveToken = (token) =>{
        sessionStorage.setItem('token',JSON.stringify(token));
        // sessionStorage.setItem('user',JSON.stringify(user));

        setToken(token);
        setUser(user);
        navigate('/dashboard');
    }

    const logout = () => {
        sessionStorage.clear();
        navigate('/login');
    }
    // "Authorization" : `Bearer ${token}`
    const http = axios.create({
        baseURL:"http://127.0.0.1:8000/api",
        headers: {
            'Accept':'application/json',
            'Content-Type':'application/json',
        }
    });
    return {
        setToken:saveToken,
        token,
        user,
        getToken,
        http,
        logout
    }
}