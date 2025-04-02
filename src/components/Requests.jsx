import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import BASE_URL from '../utils/constants';
import { addRequest } from '../utils/requestSlice';


const Requests = () => {

const dispatch = useDispatch();

const requests = useSelector((store)=>store.requests);

console.log(requests);



  const fetchRequest = async()=>{
try{
    const res = await axios.get(BASE_URL+"/user/requests/received" , {withCredentials:true});
    // console.log(res.data.data);

    dispatch(addRequest(res.data.data));
    // console.log(res.data.data);

  }

  catch(err){
    console.log("Error "+ err.message );
  }

}

  useEffect(()=>{
    fetchRequest();
  },[])

  if(!requests) return ;
  if(requests.length ===0 ) return(<p>no connections found </p>)

  return (

    <div className="text-center my-10">
    <h1 className="text-bold text-white text-3xl">Connection Requests</h1>

    {requests.map((request) => {
      const { _id, firstName, lastName, photoId, age, gender, bio } =
        request.fromUserId;

      return (
        <div
          key={_id}
          className="flex m-4 p-4 rounded-lg bg-base-300 w-1/2 mx-auto"
        >
          <div>
        <img
          alt="photo"
          className="w-20 h-20 rounded-full object-cover"
          src={photoId}
        />
          </div>
          <div className="text-left mx-4 ">
        <h2 className="font-bold text-xl">
          {firstName + " " + lastName}
        </h2>
        {age && gender && <p>{age + ", " + gender}</p>}
        <p>{bio}</p>
          </div>
          {/* <Link to={"/chat/" + _id}>
        <button className="btn btn-primary">Chat</button>
          </Link> */}
          <div className="ml-auto flex gap-2">
        <button className="btn btn-primary">Accept</button>
        <button className="btn btn-secondary">Reject</button>
          </div>
        </div>
      );
    })}
  </div>
  )
}

export default Requests