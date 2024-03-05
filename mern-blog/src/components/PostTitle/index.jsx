import React, { useEffect } from 'react'
import "./index.scss";
import AOS from "aos";
import "aos/dist/aos.css";
const PostTitle = () => {
    useEffect(() => {
        AOS.init({ duration: 2500 });
    }, []);
    return (
        <>
            <div className='title'>
                <h4  data-aos="fade-right" className='montserrat'>SELECTED BLOG</h4>
                <p  data-aos="fade-left" className='libre-regular-i'>We nurture our collaborative creative thinking & high-end design outcomes to develop compelling work that sets us apart.</p>
            </div>
        </>
    )
}

export default PostTitle