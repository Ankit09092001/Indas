import React from 'react';
import { MDBIcon,MDBCard } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBCard style={{ backgroundColor: '#FFFFE8' }}>
    <div className="container" >
      <div className="row text-center">
        <div className="col-lg-3 col-md-6 mb-5 mb-md-5 mb-lg-0 position-relative">
        <br />
          <MDBIcon icon='fas fa-globe' className="fas fa-users fa-3x text-primary mb-4" />
          <h5 className="text-primary fw-bold mb-3">Extensive Global Network</h5>
          
          <div className="vr vr-blurry position-absolute my-0 h-100 d-none d-md-block top-0 end-0"></div>
        </div>

        <div className="col-lg-3 col-md-6 mb-5 mb-md-5 mb-lg-0 position-relative">
            <br />
          <MDBIcon icon='fas fa-briefcase' className="fas fa-utensils fa-3x text-primary mb-4" />
          <h5 className="text-primary fw-bold mb-3">Proven Industry Expertise</h5>
          
          <div className="vr vr-blurry position-absolute my-0 h-100 d-none d-md-block top-0 end-0"></div>
        </div>

        <div className="col-lg-3 col-md-6 mb-5 mb-md-0 position-relative">
        <br />
          <MDBIcon icon='fas fa-dollar-sign' className="fas fa-check-double fa-3x text-primary mb-4" />
          <h5 className="text-primary fw-bold mb-3">Competitive Pricing</h5>
          
          <div className="vr vr-blurry position-absolute my-0 h-100 d-none d-md-block top-0 end-0"></div>
        </div>

        <div className="col-lg-3 col-md-6 mb-5 mb-md-0 position-relative">
        <br />
          <MDBIcon icon='fas fa-headset' className="fas fa-concierge-bell fa-3x text-primary mb-4" />
          <h5 className="text-primary fw-bold mb-3">Dedicated Support Team</h5>
          
        </div>
      </div>
    </div>
    </MDBCard>
  );
}
