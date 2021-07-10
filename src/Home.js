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
                    <Product
                    title = "OnePlus 9R 5G"
                    price={39999} 
                    image= "https://images-na.ssl-images-amazon.com/images/I/61PDbUd1VaL._SX679_.jpg"
                    rating = {4}/>

                    <Product 
                    title = "Mi 11X Pro 5G"
                    price={42999} 
                    image= "https://images-eu.ssl-images-amazon.com/images/I/41Y52jD863S._AC_SX368_.jpg"
                    rating = {5}/>
                    
                    <Product 
                    title = "Apple iPhone 12 Pro Max (512GB) - Pacific Blue"
                    price={153500.00} 
                    image= "https://m.media-amazon.com/images/I/71MHTD3uL4L._SL1500_.jpg"
                    rating = {3}/>
                    {/* product */}
                </div>
                
                <div className="home_row">
                    <Product 
                    title = "Apple Silicone Case with MagSafe (for iPhone 12 Pro Max)"
                    price={4900} 
                    image= "https://m.media-amazon.com/images/I/61HrgBHXueS._AC_SX615_SY462_.jpg"
                    rating = {4}/>
                    
                    <Product
                    title = "Logitech C270 HD Webcam"
                    price={39,999} 
                    image= "https://images-eu.ssl-images-amazon.com/images/I/61yo4swj-PL._AC_UL232_SR232,232_.jpg"
                    rating = {4}/>
                    
                </div>
        
                
                
                <div className="home_row">
                    <Product 
                    title = "2020 Apple MacBook Pro "
                    price={135000} 
                    image= "https://m.media-amazon.com/images/I/71an9eiBxpL._AC_UL480_FMwebp_QL65_.jpg"
                    rating = {5}/>
                    
                    
                    <Product
                    title = "ASUS ROG Zephyrus G14, 14 FHD 120Hz, Ryzen 5 4600HS, GTX 1650Ti 4GB Graphics, Gaming Laptop"
                    price={90990} 
                    image= "https://images-na.ssl-images-amazon.com/images/I/81i1XE-J04L._SX679_.jpg"
                    rating = {4}/>
                   
                    <Product
                    title = "Microsoft Surface Laptop 4 AMD Ryzen™ 5 4680U 13.5 inch Touchscreen Laptop "
                    price={96900} 
                    image= "https://images-eu.ssl-images-amazon.com/images/I/41sT-ej9Q-L._SX300_SY300_QL70_FMwebp_.jpg"
                    rating = {3}/>
                    
                    <Product
                    title = "DELL XPS 9300 13.3-inch (33.78 cms) FHD Laptop "
                    price={124990} 
                    image= "https://m.media-amazon.com/images/I/61nD7PI4O9L._AC_UY327_FMwebp_QL65_.jpg"
                    rating = {3}/>
                    {/* product */}
                </div>
                
                <div className="home_row">
                    
                    <Product
                    title = "Sennheiser Consumer Audio HD 450BT Bluetooth 5.0 Wireless Headphone with Active Noise Cancellation "
                    price={29870} 
                    image= "https://m.media-amazon.com/images/I/71z97HfSZxS._AC_UL480_QL65_.jpg"
                    rating = {3}/>
                    
                    
                   
                  
                    <Product 
                     title = "Wildcraft 44 Ltrs Casual Backpack (11629-Wolf_Black) "
                     price={1317} 
                     image= "https://m.media-amazon.com/images/I/41Fz+sra7xL._AC_UL480_FMwebp_QL65_.jpg"
                     rating = {3}/>
                    {/* product */}
                </div>
                
                     <Product
                     title ="2021 Apple iPad Pro with Apple M1 chip (11-inch/27.96 cm, Wi-Fi, 1TB) - Space Grey (3rd Generation)"
                     price={126999} 
                     image="https://m.media-amazon.com/images/I/81Y5WuARqpS._AC_SX615_SY462_.jpg"
                     rating={3} />
                </div>
        </div>
    )
}

export default Home
