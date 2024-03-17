import React, { useEffect, useState } from 'react'
import "./index.scss";
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
const PostDetail = () => {
    const [detail, setDetail] = useState([])
    const { id } = useParams()
    async function getFetch(id) {
        try {
            await fetch("http://localhost:3200/postdetailauthorAndcategory/" + id)
                .then(res => res.json())
                .then(data => setDetail(data))
        } catch (error) {
            console.log(error.message);
        }
    }
    useEffect(() => {
        getFetch(id)
    }, [])
    return (
        <>
        <Helmet>
        <title>Blog Detail</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
            <section id='post_detail'>
                <div className='hero_detail'>
                    <img src={detail.image} alt="" />
                    <h1 className='dancing'>{detail.title}</h1>
                </div>
                <div className='post_detail_container'>
                    <div className='detail_content'>
                        <div className='detail_content_item'>
                            <div className='detail-title'>
                                <div className='line'></div>
                                <p className='montserrat'>Description</p>
                            </div>
                            <p dangerouslySetInnerHTML={{ __html: detail.description }} className='text' />
                        </div>
                        <div className="detail_content_item">
                            <div className='detail-title'>
                                <div className='line'></div>
                                <p className='montserrat'>Category</p>
                            </div>
                            <p className='text'>{detail.category?.name}</p>
                        </div>
                        <div className="detail_content_item">
                            <div className='detail-title'>
                                <div className='line'></div>
                                <p className='montserrat'>Author</p>
                            </div>
                            <p className='detail_name'>{detail.author?.name}</p>
                            <div className='author_icons'>
                                <div className='author_icon'>
                                    <i className="fa-brands fa-facebook-f"></i>
                                </div>
                                <div className='author_icon'>
                                    <i className="fa-brands fa-linkedin-in"></i>
                                </div>
                                <div className='author_icon'>
                                    <i className="fa-brands fa-x-twitter"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PostDetail