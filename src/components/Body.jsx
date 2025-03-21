import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import NavBar from './NavBar'
import Footer from './Footer'
import axios from 'axios'
import BASE_URL from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../utils/userSlice'
import { useEffect } from 'react'
import appStore from '../utils/appStore'

const Body = () => {

  // when refrehed user is automitacally loggedout 
  // fetch user profile in body before loading to the components

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData= useSelector((store)=>store.user);


const fetchUser = async () => {
  try {
    
    const res = await axios.get(BASE_URL + "/profile/view", { withCredentials: true });
    dispatch(addUser(res.data));
  } catch (err) {
    if (err.response && err.response.status === 400) {
      navigate("/login");
    } else {
      console.log(err.message);
    }
  }
};

useEffect(() => {
  if(!userData)
  fetchUser();
}, []);
  return (

<>

    <NavBar/>
    <Outlet/>
    <Footer/>


    </>

  )
}

export default Body
