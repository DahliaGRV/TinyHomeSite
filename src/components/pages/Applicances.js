import React from 'react';
import '../../styles/appliances.css';
import { Link } from "react-router-dom"

export default function Appliances() {
    return (
        <div className="parentDiv">
            <div class="l-container">
                <h3><Link className="text-light" to="/appliances/bathroom">Bathroom</Link></h3>
                <h3><Link className="text-light" to="/appliances/bathroom">Kitchen</Link></h3>
                <h3><Link className="text-light" to="/appliances/bathroom">Washer/Dryer</Link></h3>
                <h3><Link className="text-light" to="/appliances/bathroom">Heating/ Cooling</Link></h3>
                <card class="b-game-card">
                    <Link className="text-light" to="/appliances/bathroom">
                        <div class="b-game-card__cover"><img className="cardImages" src="/TinyBathroom.jpg" alt="Bathroom" /></div>
                    </Link>
                </card>
                <card class="b-game-card">
                    <Link className="text-light" to="/appliances/kitchen">
                        <div class="b-game-card__cover" ><img className="cardImages" src="/Kitchen.jpg" alt="Kitchen" /></div>
                    </Link>
                </card>
                <card class="b-game-card">
                <Link className="text-light" to="/appliances/laundry">
                    <div class="b-game-card__cover" > <img className="cardImages" src="/TinyWasher.jpg" alt="Washer" /></div>
                    </Link>
                </card>
                <card class="b-game-card">
                <Link className="text-light" to="/appliances/cooling">
                    <div class="b-game-card__cover" ><img className="cardImages" src="/MiniSplit.jpg" alt="Cooling" /></div>
                    </Link>
                </card>
            </div>
        </div>
    )
}