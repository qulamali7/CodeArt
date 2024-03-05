import React, { useEffect, useState } from 'react'
import "./index.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { MDBBtn, MDBContainer } from 'mdb-react-ui-kit';
const Categories = () => {
    useEffect(() => {
        AOS.init({ duration: 2500 });
    }, []);
    const [categories, setCategories] = useState("")
    async function getFetchByCategory() {
        try {
            await fetch("http://localhost:3200/category")
                .then(res => res.json())
                .then(data => setCategories(data))
        } catch (error) {
            console.log(error.message);
        }
    }
    useEffect(() => {
        getFetchByCategory()
    }, [])

    return (
        <>
            <section id='categories'>
                <div className='category_container'>
                    <div className='category_content'>
                        <div className='category_content_title'>
                            <h4 data-aos="fade-right" className='montserrat'>CATEGORY</h4>
                        </div>
                        <div className='category_cards'>
                            {categories && categories.map((x) => (
                                <MDBContainer key={x._id}>
                                    <p data-aos="fade-up" className="spoiler">
                                        {x.name}
                                    </p>
                                </MDBContainer>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Categories