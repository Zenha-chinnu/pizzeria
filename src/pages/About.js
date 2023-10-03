import React from 'react'
import BackGround from "../assets/background.jpg"
import '../styles/About.css'

function About() {
  return (
    <div className='about'>
        <div className='aboutTop'>
        </div>
        <div className='aboutBottom' 
        style={{backgroundImage:`url(${BackGround})`}}>
            <h1>ABOUT US</h1>
            <p>"For me, pizza is something that makes you smile – incredible dough lovingly stretched and topped with well-sourced ingredients and fired through a belting hot oven. Enjoyed with a cold tipple and good company… What's not to love? There’s a pizza for all moods and all occasions, the possibilities are limitless.” -Zenha</p>
                 <p>Zenha’s Pizzeria started life inside some of our Zenha’s Italian restaurants, in 2014. We wanted to make quick, delicious and affordable pizzas that everyone could enjoy.</p>

<p>Incredible pizza needs incredible dough, and we spent almost two years perfecting ours, using traditional Neapolitan methods. We top our pizzas with bold, simple flavours and fresh ingredients. We've ripped up the rule book with our exciting international and locally inspired toppings, while also staying true to those delicious classic Italian flavours. The choice is yours!</p>

<p>In 2015 we launched Zenha’s Pizzeria in India as a stand-alone restaurant. Our game-changing flavours, simple surroundings, relaxed atmosphere and quick service were an instant hit. We now have a family of buzzing restaurants located in Australia, Asia, Europe and the Middle East.</p>

<p>Hope you will enjoy our recipes.</p>
        </div>
    </div>
  )
}

export default About
