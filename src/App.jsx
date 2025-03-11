import { BrowserRouter,Routes, Route } from "react-router-dom";
// import NavBar from "./components/NavBar";
import Body from "./components/Body";
import Login from "./components/Login";
import Profile from "./components/Profile";
// import Footer from "./components/Footer";
import appStore from "./utils/appStore";
import {Provider} from "react-redux";
import Feed from "./components/Feed";
export default function App() {
  return (
   
<>
<Provider store={appStore} >
<BrowserRouter basename="/">
<Routes>
  
<Route path="/" element = {<Body/>}> 

 <Route path = "/login" element={<Login />} />

<Route path ="/profile" element = {<Profile/>}/>
<Route path = "/feed" element= {<Feed/>}/>


</Route>


</Routes>

</BrowserRouter>

</Provider>

</>
  )
}
