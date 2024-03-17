import React, { useEffect } from 'react'
import "./index.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Mousewheel, Pagination, Autoplay, Keyboard } from 'swiper/modules';
import { Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
const Slider = () => {
    useEffect(() => {
        AOS.init({ duration: 3000 });
    }, []);
    return (
        <>
            <section id='slider'>
                <Swiper
                    loop={true}
                    keyboard={{
                        enabled: true,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    direction={'horizontal'}
                    centeredSlides={true}
                    autoplay={{
                        delay: 20000,
                        disableOnInteraction: false,
                    }}
                    slidesPerView={1}
                    mousewheel={true}
                    modules={[Mousewheel, Pagination, Autoplay, Keyboard]}
                >
                    <SwiperSlide>
                        <div className='slide1'>
                            <button><Link className='montserrat'>View More</Link></button>
                            <div data-aos="fade-down" className='scroll_arrow'>
                                <svg class="arrows" width="22px" height="16px" viewBox="0 0 22 16">
                                    <g id="arrow-down" transform="translate(1.000000, 1.000000)" stroke="currentColor" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <path d="M20.1428571,0.0563380282 L10,7.94366197 L-0.142857143,0.0563380282" id="arrow-1"></path>
                                        <path d="M20.1428571,6.05633803 L10,13.943662 L-0.142857143,6.05633803" id="arrow-2"></path>
                                    </g>
                                </svg>
                            </div>
                        </div>
                        <video autoPlay play-button-variant="play" aria-hidden="true" tabindex="-1"  loop muted playsinline  data-poster src="https://demos.pixelgrade.com/pile/wp-content/uploads/sites/6/2016/04/loft-totally-tomato-hd.mp4">
                        </video></SwiperSlide>
                    <SwiperSlide>
                        <div className='slide2'>
                            <h1>Crafting Digital Experiences</h1>
                            <p className='libre-regular'>The work of designer Frank Lucas</p>
                        </div>
                        <video autoPlay play-button-variant="play" aria-hidden="true"  loop muted  data-poster tabindex="-1" playsinline src="../../../public/videos/video.mp4"></video>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='slide3'>
                            <Link>Fashion</Link>
                            <Link> - Photography</Link>
                            <h1>Kara Skinner</h1>
                            <p className='dancing-700'>The Work of Rebekah Campbell</p>
                        </div>
                        <img src="https://demos.pixelgrade.com/pile/wp-content/uploads/sites/6/2016/04/kara-skinner-featured-768x471@2x.jpg" alt="" />
                    </SwiperSlide>
                </Swiper>
            </section>
        </>
    )
}

export default Slider