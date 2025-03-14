
import React, { useState } from 'react'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
// import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import BASE_URL from "../utils/constants.js"


const Login = ()=>{
    
  const navigate = useNavigate();
const [emailId, setEmailId]= useState("Vikram2@gmail.com");
const [password,setPassword] = useState("Vikram2@123");

const dispatch = useDispatch();

const[error,setError]=useState("");


const handleLogin = async ()=>{
try{

  const res= await axios.post(`${BASE_URL}/login`,{
        emailId,password,
    },{withCredentials:true})

    if(res) {
        console.log("user loggedin successfully");
    }
 

    navigate('/feed');

    dispatch(addUser(res.data));
}


catch(err){
  // console.log(err);
setError(err.response.data);
    //  console.log("error occured" +  err.message);

}

}

    return (
        <>
        <div className='flex justify-center py-10'>
  <div className="card bg-base-200 w-96 shadow-xl">
  <div className="card-body">
    <h2 className="card-title flex justify-center">🧑‍💻</h2>

    <label className="form-control w-full max-w-xs">
  <div className="label py-3">

    <span className="label-text">Email</span>
    <span className="label-text-alt"></span>

  </div>
  <input type="text" value={emailId} placeholder="Email" className="input input-bordered w-full max-w-xs"  onChange={(e)=> setEmailId(e.target.value)}/>
  <div className="label">
  </div>


</label>

    <label className="form-control w-full max-w-xs">
  <div className="label py-3">
    <span className="label-text">Password</span>
    <span className="label-text-alt"></span>
  </div>
  <input type="password" value={password} placeholder="Password" className="input input-bordered w-full max-w-xs" onChange={(e)=>setPassword(e.target.value)} />
  <div className="label">
  </div>
</label>

<p className='text-red-500'>{error}</p>
    <div className="card-actions justify-center py-3">
      <button className="btn btn-primary " onClick={handleLogin}>Login</button>
    </div>

  </div>
</div>
</div>

    </>
    )
}

export default Login;
