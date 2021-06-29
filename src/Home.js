import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
    return (
        <div className='home'>
            <div className=" home_container">
                <img className="home_image" 
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/gateway/placement/launch/ClarksonsFarmS1/CFRM_S1_GWBleedingHero_FT_COVIDUPDATE_XSite_3000X1200_PV_en-GB._CB666026822_.jpg" alt="" />
            
                <div className="home_row">
                    <Product/>
                    <Product/>
                    {/* product */}
                </div>
                
                <div className="home_row">
                    <Product/>
                    <Product/>
                    <Product/>
                    {/* product */}
                    {/* product */}
                    {/* product */}
                </div>
        
                
                
                <div className="home_row">
                    <Product/>
                    <Product/>
                    {/* product */}
                </div>
                
                <div className="home_row">
                    <Product/>
                    {/* product */}
                </div>
                
                </div>
        </div>
    )
}

export default Home
