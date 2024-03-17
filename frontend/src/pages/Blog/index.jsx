import React, { useContext, useEffect, useState } from 'react'
import "./index.scss";
import { Link, NavLink } from 'react-router-dom';
import { SerachContext } from '../../context/SearchContext';
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from 'react-helmet-async';
const Blog = () => {
  useEffect(() => {
    AOS.init({ duration: 2500 });
}, []);
  const [blog, setBlog] = useState([])
  const [apicategories, setApicategories] = useState([])
  const [categories, setCategories] = useState("")
  const { search, handleSearch } = useContext(SerachContext)
  async function getFetch() {
    try {
      await fetch("http://localhost:3200/postWithauthorAndcategory")
        .then(res => res.json())
        .then(data => setBlog(data))
    } catch (error) {
      console.log(error.message);
    }
  }
  async function getFetchByCategory() {
    try {
      await fetch("http://localhost:3200/category")
        .then(res => res.json())
        .then(data => setApicategories(data))
    } catch (error) {
      console.log(error.message);
    }
  }
  useEffect(() => {
    getFetch()
    getFetchByCategory()
  }, [])

  function handleCategory(id) {
    setCategories(id)
  }

  return (
    <>
    <Helmet>
        <title>Blogs</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <section id='blog'>
        <div className='blog_hero'>
          <h1 className='montserrat' data-aos="fade-up">Blog</h1>
        </div>
        <div className='blog_container'>
          <div className='blog_content'>
            <div className='blog_title'>
              <h4 className='montserrat' data-aos="fade-down">SELECTED Blog</h4>
              <p className='libre-regular-i' data-aos="fade-left">We nurture our collaborative creative thinking & high-end design outcomes to develop compelling work that sets us apart.</p>
            </div>
            <div className='search_filter'>
              <input type="text" placeholder='Search Blog by name' value={search} onChange={handleSearch} />
              <ul>
                <NavLink data-aos="fade-left" className='libre-regular ' onClick={() => handleCategory("")}>All</NavLink>
                {apicategories && apicategories.map((x) => (
                  <NavLink data-aos="fade-left" className='libre-regular ' onClick={() => handleCategory(x._id)}>{x.name}</NavLink>
                ))}
              </ul>
            </div>
            <div className='blog_cards'>
              {blog && blog
                .filter((x) => x.title.toLowerCase().includes(search.toLowerCase()))
                .filter((x) => x.category?._id.toString().includes(categories))
                .map((x) => (
                  <Link to={"/detail/" + x._id}>
                    <div  data-aos="flip-left" className='blog_card'>
                      <img src={x.image} alt="" />
                      <div className='card_text'>
                        <span>{x.category.name}</span>
                        <h2>{x.title}</h2>
                        <p>See More</p>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Blog