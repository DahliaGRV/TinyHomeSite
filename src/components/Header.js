import React from 'react';
import '../styles/header.css';
import {Link} from "react-router-dom"


export default function Header() {
    return(
<nav className="navbar bg-dark">
  <div className="container-fluid">
    <h1 className="text-light">        <Link className="text-light" to="/">Tiny Home Site</Link></h1>
    <p className="nav-item">
        <Link className="text-light" to="/">Home</Link>
    </p>
    <p className="nav-item">
        <Link className="text-light"to="/appliances">Appliances</Link>
    </p>
    <p className="nav-item">
        <Link className="text-light" to="/community">Community</Link>
    </p>
    <p className="nav-item">
        <Link className="text-light" to="/manufacturers">Manufacturers</Link>
    </p>
    <p className="nav-item">
        <Link className="text-light" to="/photos">Home Library</Link>
    </p>
  </div>
</nav>
    )
}