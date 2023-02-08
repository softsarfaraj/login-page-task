import React, { createContext, useEffect, useState } from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import {Navbar} from './Navbar';
import {Login} from './Login';
import {Register} from './Register';
import {UserListing} from './UserListing';
import {UserDetail} from './UserDetail';
import { Task } from './Task';
import axios from 'axios';
import { AddUser } from './AddUser';
import "./Login.css"



const appstate=createContext()

function App() {


  const loginUsers=[{email:"admin@gmail.com",password:"admin@123",username:"Admin"}]
  const getUsersData=async()=>{
    const result=await axios.get("https://dummyjson.com/users")
    localStorage.setItem("users",JSON.stringify(result.data.users))
    localStorage.setItem("login",JSON.stringify(loginUsers))

  }
  useEffect(()=>{
    getUsersData()
  },[])
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/userlisting' element={<UserListing/>}/>
      <Route path='/details' element={<UserDetail/>}/>
      <Route path='/modal' element={<Task/>}/>
      <Route path='/add' element={<AddUser/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
