import React from 'react'
import {Link} from 'react-router-dom'
import BannerImage from '../assets/pizza1.jpg'
import '../styles/Home.css';

function Home() {
  return (
    <div className='home' style={{backgroundImage:`url(${BannerImage})` ,backgroundRepeat:'no-repeat',backgroundSize:'cover',height:'90%',width:'98.65%',paddingLeft:'20px',marginLeft:'0px',objectFit:'none',paddingBottom:'100px'}}>
     <div className='headerContainer' >
        <h1>Zenha's Pizzaria</h1>
        <p>LOVE AT FIRST SLICE</p>
        <Link to="/menu">
        <button>ORDER NOW</button>
        </Link>
     </div>
    </div>
  )
}

export default Home
