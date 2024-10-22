import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
} from "mdb-react-ui-kit";

const AboutPage = () => {
  return (
    <div>
   
      
      <MDBRow className="px-4">
        <MDBCol md="6">
          <MDBCard light style={{ backgroundColor: '#FFFFE8' }}>
            <MDBCardBody>
              <MDBCardTitle>Address</MDBCardTitle>
              <MDBCardText>
              S-2, SPG Evans,<br/> South Bopal, Ahmedabad, Gujarat - 380058
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="6">
          <MDBCard light style={{ backgroundColor: '#FFFFE8' }}>
            <MDBCardBody>
              <MDBCardTitle>Contact</MDBCardTitle>
              <MDBCardText>
                Email: aarnaenterprise@gmail.com <br />
                Phone: xxxxx xxxxx
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      <MDBRow className="px-4 mt-4">
      <MDBCol>
  <MDBCard light style={{ backgroundColor: '#FFFFE8' }}>
    <MDBCardBody>
      <MDBCardTitle>Our Story</MDBCardTitle>
      <MDBCardText>
        Established with a vision to bridge global markets, Aarna Enterprises embarked on its journey to become a trusted name in the import-export industry. Specializing in a wide range of products including fresh vegetables, fruits, spices, grains, biscuits, and stationery, we have consistently delivered quality and reliability. Through our dedication to sourcing premium goods and ensuring efficient logistics, we have built strong partnerships across the globe. Our unwavering commitment to excellence has earned us the trust of clients and partners alike, as we continue to grow and expand our reach.
      </MDBCardText>
      <br /> 
      <MDBCardTitle>Our Vision</MDBCardTitle>
      <MDBCardText>
        As we look to the future, our vision is to enhance our global presence, providing sustainable and reliable import-export solutions across diverse markets. We aim to expand our portfolio and build stronger connections with suppliers and customers, ensuring that Aarna Enterprises remains at the forefront of international trade. By focusing on innovation, quality control, and customer satisfaction, we strive to become a global leader in the trade of agricultural products, packaged goods, and more.
      </MDBCardText>
    </MDBCardBody>
  </MDBCard>
</MDBCol>
      </MDBRow>
    </div>
  );
};

export default AboutPage;
