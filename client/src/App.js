import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/RegisterUser";
import Landingscreen from "./components/Auth/Landingscreen";
import NavBar from "./components/Auth/NavBar";
import RequestOrder from "./components/Suuplier/RequestOrder";
import AllOrderRequestView from "./components/Suuplier/AllOrderRequestView";

import React, { useEffect, useState } from "react";


let isauth = localStorage.getItem('user');


function App() {
  
  const [user, setUser] = useState("");


  useEffect(() => {
    setUser(localStorage.getItem("userRole"));
  }, []);




  return (
    <>
      <div >
        <Router>
        <NavBar/>
          <Routes>
          <Route  exact path="/" element={<Landingscreen />} />
          
          <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/RequestOrder" element={<RequestOrder />} />
            <Route path="/AllOrderRequestView" element={<AllOrderRequestView />} />
        

            
          </Routes>

       
        </Router>

      </div>
    </>
  );
}

export default App;
