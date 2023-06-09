import React from 'react'
import Slider from '../../components/Slider/Slider.jsx';
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts.jsx';
import Categories from '../../components/Categories/Categories.jsx';
import Contact from '../../components/Contact/Contact.jsx';
import Sliding from '../../components/Sliding/Sliding.jsx';
import Features from '../../components/Features/Features.jsx';
import Banner from "../../components/Banner/Banner.jsx"
import './Homepage.css'

const Homepage = () => {
    return (
        <div>
            <Slider/>
            <Sliding/>
            <Features/>
            <FeaturedProducts type="featured"/>
            <Categories/>
            <FeaturedProducts type="trending"/>
            <Banner/>
            <Contact/>
        </div>
    )
}

export default Homepage;
