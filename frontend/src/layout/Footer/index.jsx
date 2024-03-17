import React from 'react'
import "./index.scss";
import { Link } from 'react-router-dom';
import { MDBBtn, MDBContainer } from 'mdb-react-ui-kit';
const Footer = () => {
  return (
    <>
      <footer>
        <div className='footer_container'>
          <div className='footer_content'>
            <Link to={"/"}> <span>code</span><span>Art</span></Link>
            <p>Created by ART Theme</p>
            <div className='footer_icons'>
              <div className='footer_icon'>
                <i className="fa-brands fa-x-twitter"></i>
              </div>
              <div className='footer_icon'>
                <i className="fa-brands fa-facebook"></i>
              </div>
              <div className='footer_icon'>
                <i className="fa-brands fa-instagram"></i>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer