import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/RegisterUser";
import Landingscreen from "./components/Auth/Landingscreen";
import NavBar from "./components/Auth/NavBar";
import RequestOrder from "./components/Suuplier/RequestOrder";
import AllOrderRequestView from "./components/Suuplier/AllOrderRequestView";
import AddSupplier from "./components/procurementStaff/AddSupplier";
import DisplayPendingOrderList from "./components/procurementStaff/DisplayPendingOrderList";
import DisplayApprovedOrderList from "./components/procurementStaff/DisplayApprovedOrderList";
import EvaluateOrder from "./components/procurementStaff/EvaluateOrder";
import TransportOrder from "./components/Suuplier/TransportOrder";


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
            <Route path="/AddSupplier" element={<AddSupplier />} />
            <Route path="/DisplayPendingOrderList" element={<DisplayPendingOrderList />} />
            <Route path="/DisplayApprovedOrderList" element={<DisplayApprovedOrderList />} />
            <Route path="/UpdateOrderById/:id"element={<EvaluateOrder />}/>
            <Route path="/ViewOrderTransportById/:id"element={<TransportOrder />}/>

            


          </Routes>

       
        </Router>

      </div>
    </>
  );
}

export default App;
