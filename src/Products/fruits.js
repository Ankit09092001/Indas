import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
} from "mdb-react-ui-kit";
import Navbar from "./Navbar";
import onion from "./Images/onion.jpg";
import chilli from "./Images/green chilli.jpg";
import drumstick from "./Images/Drumstick.jpg";
import vegetables from './Images/vegetables.jpg';

export default function App() {
  return (
    <div>
      <Navbar />
      <div style={{ backgroundColor: "#FFFFE8" }}>
        <br />
        <div className="bg-image" style={{marginLeft:"20px",marginRight:"20px",borderRadius:"10px"}}>
          <img
            src={vegetables}
            className="w-100"
            alt="Sample"
            style={{height:"30rem"}}
          />
          <div
            className="mask"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
          >
            <div className="d-flex justify-content-center align-items-center h-100">
              <p className="text-white mb-0">Fruits</p>
            </div>
          </div>
        </div>
        <br />
        <MDBCard className="mx-auto" style={{ width:"70%",height: "auto",maxHeight:"600px" }}>
          <MDBRipple
            rippleColor="light"
            rippleTag="div"
            className="bg-image hover-overlay"
          >
            <MDBCardImage
              src={onion}
              fluid
              alt="..."
              style={{ width: "100%" }}
            />
            <a>
              <div
                className="mask"
                style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
              ></div>
            </a>
          </MDBRipple>
          <MDBCardBody className="text-center">
            <MDBCardTitle>Mangoes</MDBCardTitle>
            <MDBCardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </MDBCardText>
            <MDBBtn href="#" className="mx-auto">
              Button
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
        <br />
        <MDBCard className="mx-auto" style={{ width:"70%",height: "auto",maxHeight:"600px" }}>
          <MDBRipple
            rippleColor="light"
            rippleTag="div"
            className="bg-image hover-overlay"
          >
            <MDBCardImage
              src={chilli}
              fluid
              alt="..."
              style={{ width: "100%" }}
            />
            <a>
              <div
                className="mask"
                style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
              ></div>
            </a>
          </MDBRipple>
          <MDBCardBody className="text-center">
            <MDBCardTitle>Grapes</MDBCardTitle>
            <MDBCardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </MDBCardText>
            <MDBBtn href="#" className="mx-auto">
              Button
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
       
      </div>
    </div>
  );
}
