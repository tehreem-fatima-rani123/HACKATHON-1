import React from 'react'
import Navbar from './componentes/Navbar'
import Hero from './componentes/Hero'
import Footer from './componentes/Footer'
import Logo from './componentes/Logo'
import Product from './componentes/Product'
import SingleProduct from './componentes/SingleProduct'
import FeaturedProducts from './componentes/FeatuerProduct'
import Categories from './componentes/Categories'
import OurProduct from './componentes/AllCard'
import Header from './componentes/Header'


const page = () => {
  return (
   <>
   <Navbar/>
   <Header/>
   <Hero/>
   <Logo/>
   <FeaturedProducts/>
   <Categories/>
   <OurProduct/>
   <Product/>
   <SingleProduct/>
   <Footer/>

   
   </>
  )
}

export default page
