import React from 'react'
import Posts from '../../components/Posts'
import Slider from '../../components/Slider'
import Brand from '../../components/Brand'
import Categories from '../../components/Categories'
import { Helmet } from 'react-helmet-async'

const Home = () => {
  return (
    <>
    <Helmet>
        <title>Home</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
    <Slider/>
    <Categories/>
    <Posts/>
    <Brand/>
  
    </>
  )
}

export default Home