import React from 'react';
import "./Footer.css"
import {
  MDBFooter,
 
} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter className='text-center text-white' style={{ backgroundColor: '#f1f1f1' }}>
    <div className='footer-details'>
       <p>E-Mail:-ebike@gmail.com</p>
       <p>contact:-9517534563</p>
       
    </div>

      <div className='text-center text-dark p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2024 :
        <a className='text-dark' href=''>
          E-Bike Store 
        </a>
      </div>
    </MDBFooter>
  );
}