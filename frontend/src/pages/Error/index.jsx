import React from 'react'
import './index.scss';
import { Helmet } from 'react-helmet-async';
const ErrorPage = () => {
  return (
    <>
      <Helmet>
        <title>Error</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      {/* <section id='error_page'>
        <div className='error_container'>
          <h1><i className="fa-solid fa-triangle-exclamation"></i> 404 Page Not Found</h1>
        </div>
      </section> */}
      {/* <h1>404 Error Page</h1> */}
      {/* <p class="zoom-area"><b>CSS</b> animations to make a cool 404 page. </p> */}
      <section class="error-container">
        <span class="four"><span class="screen-reader-text">4</span></span>
        <span class="zero"><span class="screen-reader-text">0</span></span>
        <span class="four"><span class="screen-reader-text">4</span></span>
      </section>
    </>
  )
}

export default ErrorPage

