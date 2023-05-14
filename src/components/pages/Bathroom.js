import React from 'react';
import '../../styles/bathroom.css';

export default function Bathroom() {
    return (
        <div className="parentDiv">
        <div class="l-container">
        <h3> Bathroom </h3>
            <card class="b-game-card">
                <div class="b-game-card__cover"><img className="cardImages" src="/TinyBathroom.jpg" alt="Bathroom" /></div>
            </card>
        </div>
        </div>
    )
}