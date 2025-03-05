import { BrowserRouter,Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Body from "./Body";
import Login from "./Login";
import Profile from "./Profile";
import Footer from "./Footer";
export default function App() {
  return (
   
<>
<BrowserRouter basename="/">
<Routes>
  
<Route path="/" element = {<Body/>}> 

 <Route path = "/login" element={<Login />} />
<Route path ="/profile" element = {<Profile/>}/>


</Route>

{/* 
<Route path="/login" element={<div> Login Page </div>}></Route>
<Route path="/signUp" element= {<div>signUp</div>}></Route> */}

</Routes>

</BrowserRouter>



</>
  )
}
