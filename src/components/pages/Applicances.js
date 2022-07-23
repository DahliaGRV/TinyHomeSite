import React from 'react';
import '../../styles/appliances.css';

export default function Appliances() {
    return (
        <div className="parentDiv">
        <div class="l-container">
            <div class="b-game-card">
                <div class="b-game-card__cover"><img className="cardImages" src="/TinyBathroom.jpg" alt="slider2" /><h1> Bathroom</h1></div>
            </div>
            <div class="b-game-card">
                <div class="b-game-card__cover" ><img className="cardImages" src="/Kitchen.jpg" alt="slider2" /></div>
            </div>
            <div class="b-game-card">
                <div class="b-game-card__cover" > <img className="cardImages" src="/TinyWasher.jpg" alt="slider2" /></div>
            </div>
            <div class="b-game-card">
                <div class="b-game-card__cover" ><img className="cardImages" src="/MiniSplit.jpg" alt="slider2" /></div>
            </div>
        </div>
        </div>
    )
}