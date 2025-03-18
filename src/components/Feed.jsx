import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import BASE_URL from '../utils/constants';
// import { useNavigate } from 'react-router-dom';
import { addFeed } from '../utils/feedSlice';
import UserCard from './UserCard';



const Feed = () => {

const feed= useSelector((store)=>store.feed);
const dispatch = useDispatch();
// const navigate = useNavigate();

const getFeed = async()=>{

// if(feed && feed.length) return ;

try{

const res= await axios.get(BASE_URL+"/feed",{withCredentials:true});

// console.log("res",res);


dispatch(addFeed(res?.data));

}

catch(err){
console.log("ERROR"+ err.message);
}

}

useEffect(()=>{
  getFeed();
},[]);

// console.log("feed",feed);

// userCard(user);

  return feed && (

    <div className='flex justify-center '>
    
     < UserCard user={feed[feed.length-5]} />

    </div>

  )


}

export default Feed;