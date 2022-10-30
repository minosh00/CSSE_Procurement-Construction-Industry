import React from "react";
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { AuthUser } from "../../Services/AuthServices";
import { Tabs } from "antd";
import axios from "axios";
import logo from '../images/loginn.png'
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
const { TabPane } = Tabs;

const Profile = () => {

  const navigate = useNavigate();

  const handleSubmit = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userRole");
    navigate("/Login");
  }

  const [Fullname, setUserName] = useState("");
  const [email, setUserEmail] = useState("");
  const [currentUserID, setcurrentUserID] = useState("");
  const [room, setRooms] = useState([]);

  const handleUserName = (e) => {
    setUserName(e.target.value);
  };

  const handleUserEmail = (e) => {
    setUserEmail(e.target.value);
  };

  const details = async () => {
    let token = localStorage.getItem('token');
    let data = await AuthUser(token);
    console.log("current User", data?.data);
    setcurrentUserID(data?.data?._id);
    setUserName(data?.data?.userRole);
    setUserEmail(data?.data?.email);
  }


  useEffect(() => {
    details();
  }, [])


  return (
    <div>
      <div className='container shadow border border-5 my-5 mx-auto w-100'>

        <div className="mt-5 ml-3">
          <Tabs defaultActiveKey="1">
            <TabPane tab="My Profile" key="1">
              <MDBContainer className="container py-5 h-100">
                <MDBRow className="justify-content-center align-items-center h-100">
                  <MDBCol md="12" xl="4">
                    <MDBCard style={{ borderRadius: '25px', backgroundColor: '#f7e34a', width: '500px' }}>
                      <MDBCardBody className="text-center">
                        <div className="mt-3 mb-4">
                          <MDBCardImage src={logo}
                            className="rounded-circle" fluid style={{ width: '100px' }} />
                        </div>
                        <MDBTypography tag="h4" onChange={handleUserName} value={Fullname} type="text" readOnly={true} >{Fullname}</MDBTypography>
                        <MDBCardText className="text-muted mb-4" onChange={handleUserEmail} value={email} type="email" readOnly  >
                          <span className="mx-2" onChange={handleUserEmail} type="email" readOnly  ></span> {email}<a href="#!"></a>
                        </MDBCardText>
                        <div className="mb-4 pb-2">
                          <MDBBtn outline floating>
                            <MDBIcon fab icon="facebook" size="lg" />
                          </MDBBtn>
                          <MDBBtn outline floating className="mx-1">
                            <MDBIcon fab icon="twitter" size="lg" />
                          </MDBBtn>
                          <MDBBtn outline floating>
                            <MDBIcon fab icon="skype" size="lg" />
                          </MDBBtn>
                        </div>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </TabPane>

           
          </Tabs>
        </div>
      </div>
    </div>
  )
}




export default Profile