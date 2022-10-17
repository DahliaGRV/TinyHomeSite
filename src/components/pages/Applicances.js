import React from 'react';
import '../../styles/appliances.css';

export default function Appliances() {
    return (
        <div className="parentDiv">
        <div class="l-container">
        <h3> Bathroom </h3>
        <h3> Kitchen </h3>
        <h3> Washer/Dryer </h3>
        <h3> Heating/ Cooling</h3>
            <card class="b-game-card">
                <div class="b-game-card__cover"><img className="cardImages" src="/TinyBathroom.jpg" alt="Bathroom" /></div>
            </card>
            <card class="b-game-card">
                <div class="b-game-card__cover" ><img className="cardImages" src="/Kitchen.jpg" alt="Kitchen" /></div>
            </card>
            <card class="b-game-card">
                <div class="b-game-card__cover" > <img className="cardImages" src="/TinyWasher.jpg" alt="Washer" /></div>
            </card>
            <card class="b-game-card">
                <div class="b-game-card__cover" ><img className="cardImages" src="/MiniSplit.jpg" alt="Cooling" /></div>
            </card>
        </div>
        </div>
    )
}