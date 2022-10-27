
import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { OrderByID, ViewOrderTransportById } from "../../Services/SupplierServices";
import DataTable from "react-data-table-component";
import { 
	Badge,
	Card,
	CardHeader,
	CardTitle,
	CardBody,
    Form,
    Input,
	Label,
	Button,
	Modal,
	ModalHeader,
	ModalBody,
   } from "reactstrap";
import axios from "axios";

   


const TransportOrder = () => {

    const navigate = useNavigate();
    const { id } = useParams();


    const handleSubmit = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("userRole");
        navigate("/Login");
    };



    const [OrderID, setOrderID] = useState("");
    const [DeliveryAddress, setDeliveryAddress] = useState("");
    const [QTY, setQTY] = useState("");
    const [Price, setPrice] = useState("");
    const [Description, setDescription] = useState("");
    const [status, setstatus] = useState("");






    const handleOrderid = (e) => {
        setOrderID(e.target.value);
    };

    const handleDeliveryAddress = (e) => {
        setDeliveryAddress(e.target.value);
    };



    const handleQTY = (e) => {
        setQTY(e.target.value);
    };

    const handlePrice = (e) => {
        setPrice(e.target.value);
    };


    const handlegruopleaderitnum = (e) => {
        setDescription(e.target.value);
    };
    const handlestatus = (e) => {
        setstatus(e.target.value);
    };

    const [transportID, setTransportID] = useState('');
    const [location, setLocationD] = useState('');
    const [vehiNo, setVehiNo] = useState('');
    const[TransportStatus,setTransportStatus]= useState('');

    const createTransport = () => {
      const payload = {
       OrderID: OrderID,
       TransportID: transportID,
       location: location,
       VehicleNumber: vehiNo,
       TransportStatus: TransportStatus
      }


      console.log(payload)

      axios.post("http://localhost:5000/Transport/CreateTransport/", payload).then((res) => {
        Swal.fire("success", " success ", "success"); {

          navigate("");

      }
        console.log(res.data)
      }).catch(
        (error) => console.log(error)
      )
    }



  




    const GetTopicData = async () => {
        let data = await OrderByID(id);
        console.log("Update topics", data);
        setOrderID(data?.data?.OrderID);
        setQTY(data?.data?.QTY);
        setPrice(data?.data?.Price);
        setDescription(data?.data?.Description);
        setstatus(data?.data?.status);
        setDeliveryAddress(data?.data?.DeliveryAddress);
     

    };

    useEffect(() => {
        GetTopicData();
    }, []);

    const updateorderData = async (e) => {
        e.preventDefault();
        let newdata = {
            OrderID: OrderID,
            QTY: QTY,
            Price: Price,
            Description: Description,
            status: status,
            DeliveryAddress: DeliveryAddress,

        };

        let data = await ViewOrderTransportById(id, newdata);
        console.log("Update success ", data);
        if (!data?.data?.GroupID) {
            Swal.fire("error", " please  check again ", "error"); {

                navigate("");

            }

        } else {
            Swal.fire("success", " successfully  Evaluate  Topic", "success"); {

                navigate("");

            }
        }
    };

    return (
    <div>

<div>
      <div>
        <div className="container shadow my-5 mx-auto w-50">
          <div className="col p-3">
            <h3 className=" fw-bolder mb-4"><center>ID:&nbsp;&nbsp; {OrderID} :&nbsp;&nbsp;&nbsp;Order Delivery  Status  </center></h3>
            <form >
              <div className='row py-3'>
                  <div class="col-md-6">
                      <label for="" class="form-label">{" "}Order ID{" "}</label>
                      <input type="text"
                        class="form-control"
                        id="floatingInput"
                        readOnly={true}
                          value={OrderID}
                      />
                  </div>
                  <div class="col-md-6">
                      <label for="" class="form-label">{" "}Quantity   {" "}</label>
                      <input type="text"
                        class="form-control"
                        id="floatingPassword"
                        readOnly={true}
                        value={QTY}
                      />
                  </div>
           
              
                <div className='row py-3'>
                  <div class="col-md-6">
                  <label for="" class="form-label">{" "}Total Price {" "}</label>

                      <input type="text"
                      class="form-control"
                      id="exampleFormControlTextarea3"
                      readOnly={true}
                      value={Price}
                    />
                  </div>
                  <div class="col-md-6">
                      <label for="" class="form-label">{" "}Description  {" "}</label>
                      <input type="text"
                        class="form-control"
                        id="exampleFormControlTextarea3"
                        readOnly={true}
                        value={Description}
                      />
                  </div>
              </div>
              
              <div className='row py-3'>
                  <div class="col-md-6">
                      <label for="" class="form-label">{" "}DeliveryAddress{" "}</label>
                      <input type="email"
                        class="form-control"
                        id="exampleFormControlTextarea3"
                        readOnly={true}
                        value={DeliveryAddress}
                      />
                  </div>
                  <div class="col-md-6">
                      <label for="" class="form-label">{" "}Order status {" "}</label>
                      <input type="text"
                        class="form-control"
                        id="exampleFormControlTextarea3"
                        readOnly={true}
                        value={status}
                      />
                  </div>

                
              </div>
             
      </div>
      
            </form>
            <Link to="">
                    <button
                      type="submit"
                      style={{ fontSize: "10px" }}
                      className="btn btn-success"
                    >
                      transpot{" "}
                    </button>
                  </Link>
          </div>
      
        </div>
      
      </div>

    </div>


    <br></br>

  

<div>
      <div>
        <div className="container shadow my-5 mx-auto w-50">
          <div className="col p-3">
            <h3 className=" fw-bolder mb-4"><center> OrderID ID:&nbsp;&nbsp; {OrderID} :&nbsp;&nbsp;&nbsp;Transport Details   </center></h3>
            <form >
              <div className='row py-3'>
            
                  <div class="col-md-6">
                      <label for="" class="form-label">{" "}Transport ID{" "}</label>
                      <input type="text"
                        class="form-control"
                        id="floatingInput"
                        value={transportID} onChange={(e) => setTransportID(e.target.value)}
                      />
                  </div>
                  <div class="col-md-6">
                      <label for="" class="form-label">{" "}Location   {" "}</label>
                      <input type="text"
                        class="form-control"
                        id="floatingPassword"
                        value={location} onChange={(e) => setLocationD(e.target.value)} 
                      />
                  </div>
           
              
                <div className='row py-3'>
                  <div class="col-md-6">
                  <label for="" class="form-label">{" "}Vehicle Number  {" "}</label>

                      <input type="text"
                      class="form-control"
                      id="exampleFormControlTextarea3"
                      value={vehiNo} onChange={(e) => setVehiNo(e.target.value)} 
                    />
                  </div>

                  <div class="col-md-6">
                      <label for="" class="form-label">{" "}Transport Status   {" "}</label>
                

             <select
         class="form-control"
         id="floatingInput"
         value={TransportStatus}
         style={{ width: "200px" }}
         onChange={(e) => setTransportStatus(e.target.value)} 
       >
         <option value=""></option>
         <option value="delivered">delivered</option>
         <option value="notDelivered">Not Delivered</option>

       </select>
                  </div>
              </div>
              
         
             
      </div>
      
            </form>
            <Link to="">
                    <button
                      type="submit"
                      onClick={() => createTransport()}
                      className="btn btn-success"
                    >
                      Transport Order{" "}
                    </button>
                  </Link>
          </div>
      
        </div>
      
      </div>

    </div>
   
    </div>








    );
};

export default TransportOrder;