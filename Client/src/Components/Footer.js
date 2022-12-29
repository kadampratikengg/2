import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>


      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon color='secondary' icon='gem' className='me-3' />
                Servicing Hub
              </h6>
              <p>
                Provide Solution to all Electronics Product Repair and Provide Software Solution to improve your business.
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Services</h6>
              <p>
                <a href='#!' className='text-reset'>
                  HTML Web Design
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Hardware Support
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Software Support
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Server Support
                </a>
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon color='secondary' icon='home' className='me-2' />
                Maharashtra, India
              </p>
              <p>
                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                info@servicinghub.in
              </p>
              <p>
                <MDBIcon color='secondary' icon='phone' className='me-3' /> 
              </p>
              <p>
                <MDBIcon color='secondary' icon='print' className='me-3' /> 
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2022 Copyright : Servicing Hub
        
        
      </div>
    </MDBFooter>
  );
}