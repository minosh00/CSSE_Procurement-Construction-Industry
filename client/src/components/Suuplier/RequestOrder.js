import React, { useState , useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAllSupplier  } from "../../Services/AuthServices";
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


import { createorder } from "../../Services/SupplierServices";
import Swal from 'sweetalert2';




const RequestSupervisor = () => {

  const navigate = useNavigate();


  const[OrderID,setGroupID]=useState("");
  const[DeliveryAddress,setGruopLeaderEmail]=useState("");
  const[QTY,setQTY]=useState("");
  const[Price,setPrice]=useState("");
  const[Description,setDescription]=useState("");



  const handleGroupID = (e) => {
    e.preventDefault();
    setGroupID(e.target.value)
  }

  const handleGruopLeaderEmail = (e) => {
    e.preventDefault();
    setGruopLeaderEmail(e.target.value)
  }


  const handleQTY = (e) => {
    e.preventDefault();
    setQTY(e.target.value)
  }


  const HANDLEPRICE = (e) => {
    e.preventDefault();
    setPrice(e.target.value)
  }



  const handledescription = (e) => {
    e.preventDefault();
    setDescription(e.target.value)
  }





	const [staffDetails , setstaffDetails] = useState({});
	const [loading,setLoading] = useState(false);
	const [openModal , setopenModal] = useState(false);
	const [cosuperData,setstaffData] = useState({});

	const requestCoSupervisor = async (e) => {

		const data ={
			supervisorID: cosuperData.supervisorID,
			OrderID: OrderID,
			DeliveryAddress: DeliveryAddress,
            QTY:QTY,
            Price:Price,
            Description:Description

		}

		let response = await createorder(data);
		console.log("order reg ", response);
		if(response?.status == 201)
		{
			Swal.fire({
				icon: 'success',
				title: 'Congrats!',
				text: 'Request successfull...!',
			  })
              getAllsuperivsor();
			setopenModal(false);
		}
		else{
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: 'Request Failed!',
			  })
		}
	}
  
	const getAllsuperivsor = async () => {
		try{
			setLoading(true);
			let data =  await getAllSupplier();
			console.log("all ",data);
			let array = [];
			data?.data?.map((item) => {
				if(item?.userRole == "supplier")
				{
					array.push(item);
				}
			})
			let newData  = array?.map((item) => {
				return {
                         name:item?.name,
                         email:item?.email,
						 companyName:item?.companyName,
						 supplierAddress:item?.supplierAddress,
						password:item?.password,
						userRole:item?.userRole,
						OrderID:item?._id	
				}
			})

			setstaffDetails(newData);
			setLoading(false);
		}catch(error){
			console.log(error);
			setLoading(false);
		}
	}

	useEffect(() => {
		getAllsuperivsor();
	},[])

	const assignStaff = (data) => {
		setGroupID("");
		setGruopLeaderEmail("");
		setstaffData(data);
		setopenModal(true);
	}

	
	const columns = [
		{
		  name: (<Badge color="success" style={{fontSize:"15px"}} > Supplier Full Name</Badge>),
		  selector: "name",
		  sortable: false,
		  wrap: true,
		},
		{
		  name: (<Badge color="success" style={{fontSize:"15px"}} >Supplier Email</Badge>),
		  selector: "email",
		  cell: (data) => (
			<div style={{ display: "flex", flexDirection: "column" }}>
			  <Label>{ data.email}<br/></Label>
			</div>
		  ),
		},
		
		{
			name: (<Badge color="success" style={{fontSize:"15px"}} >Company Name </Badge>),
			selector: "name ",
			cell: (data) => (
			  <div style={{ display: "flex", flexDirection: "column" }}>
				<Label>{data.companyName}<br/></Label>
			  </div>
			),
		  },

		{
			name: (<Badge color="success" style={{fontSize:"15px"}} >Supplier Address </Badge>),
			selector: "name ",
			cell: (data) => (
			  <div style={{ display: "flex", flexDirection: "column" }}>
				<Label>{data.supplierAddress}<br/></Label>
			  </div>
			),
		  },
		{
			name: (<Badge color="danger" style={{fontSize:"15px"}} >Actions</Badge>),
			cell: (data ) => (
			  <div>
				  	<Button className="btn btn-warning" onClick={()=>assignStaff(data)}>Create Order</Button>
			  </div>
			),
			sortable: true,
			wrap: true,
		}
	  ];

  return (
    <div >
		
		<div className="">
    <div >
 
 <br />

            <br />
          
         
            <br />
            <br />
    <div style={{margin:"10px"}}>
<Card>
<CardHeader>
    <CardTitle style={{color:"red" , fontSize:"30px"}}>Request And Create  Order </CardTitle><br></br>
	<h2 style={{color:"red" , fontSize:"30px"}}>All Suppliers</h2><br></br>
</CardHeader>

<CardBody>
<DataTable 
style={{backgroundColor:"purple"}}
data={staffDetails}
columns={columns}



progressPending={loading}

/>
</CardBody>
</Card>
</div>

<div>
<Modal
isOpen={openModal}
className="modal-dialog-centered"
fade={true}
backdrop={true}>
<ModalHeader
            toggle={() => {
      setopenModal(false);
      }}>
  <Label>Create  Order  </Label>
</ModalHeader>
<ModalBody>
<div style={{width:"400px"}}> 
                  <Form>
                    <Label>Order ID    </Label>
                    <Input type="text" className="input" placeholder="Enter OrderID   " value={OrderID} onChange={(e)=>handleGroupID(e)}/>
                    <br/>
                    <Label>Delivery Address   </Label>
                    <Input type="text" className="input" placeholder="Enter Delivery Address" value={DeliveryAddress} onChange={(e)=>handleGruopLeaderEmail(e)}/>
                

                    <Label> Total Qty  </Label>
                    <Input type="text" className="input" placeholder="Enter Qty of Item " value={QTY} onChange={(e)=>handleQTY(e)}/>
                
                

                    <Label>Price </Label>
                    <Input type="text" className="input" placeholder="Enter price" value={Price} onChange={(e)=>HANDLEPRICE(e)}/>

                    <Label>Note </Label>
                    <Input type="textarea" className="input" placeholder="Enter Note " value={Description} onChange={(e)=>handledescription(e)}/>

                
                    <br/>
                    <Button className="btn btn-success" onClick={(e)=>requestCoSupervisor(e)}>Request and Create</Button>
                  </Form>
</div>
</ModalBody>
</Modal>
</div>
</div>
</div>
</div>
);
};

export default RequestSupervisor;