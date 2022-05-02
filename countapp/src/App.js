 
// import './App.css';
// import { useState } from "react"

// function App() {
//   const [count , setcount] =useState(0)
//   const handle =(value)=>{
//     setcount(value+count)
//   }
//   const handle1 =(value)=>{
//     setcount(value*count)
//   }
//   return (
//     <div className="App">
//       <h2>{count}</h2>
//        <button onClick={(e) =>handle(+1)}>add</button>
//        <button onClick={(e) =>handle(-1)}>sub</button>
//        <button onClick={(e) =>handle1(2)}>add</button>
       
//     </div>
//   );
// }

// export default App;

import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Logout } from "./components/Logout";
import { NewOrder } from "./components/NewOrders";
import { Orders } from "./components/Orders";
// import { ProtectedRoute } from "./components/ProtextedRoute";
import {Route,Routes} from "react-router-dom"
 import { Link } from "react-router-dom";
 
 

function App() {
  return (
    <div className="App">
        
       <div>
            <Link className="nav-home" to="/">
          Home
        </Link>
        {/* Show either login or logout below */}
        <Link className="nav-logout" to="/logout">
         
        </Link>
        <Link className="nav-login" to="/login">
          Login
        </Link>
        
        </div>


 
        {/* Routes are as follows:
        Route      Component
        /           Home
        /login      Login
        /logout     Logout
        /orders     Orders    Protected
        /neworder   NewOrder  Protected
        */}
        <Routes>
          <Route path="/" element ={<Home/>}>Home</Route>
          <Route path="/Login" element ={<Login/>}>login</Route>
          <Route path="/Logout" element ={<Logout/>}>logout</Route>
          <Route path="/NewOrder"element ={<NewOrder/>}>New</Route>
          <Route path="/Orders" element ={<Orders/>}>logout</Route>
        </Routes>
       
    </div>
  );
}

export default App;