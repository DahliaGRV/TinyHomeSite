import React from 'react';
import '../../styles/kitchen.css';

export default function Kitchen() {
    return (
        <div className="parentDiv">
        <div class="l-container">
        <h3> Kitchen </h3>
            <card class="b-game-card">
                <div class="b-game-card__cover" ><img className="cardImages" src="/Kitchen.jpg" alt="Kitchen" /></div>
            </card>
        </div>
        </div>
    )
}