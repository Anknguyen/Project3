import React, { useState } from "react";
import { Link } from "react-router-dom";




export default function Homepage() {
  return (
    <div className="homepageContainer">
      <div className="exampleGame"><Link to={`/Content`}>The Last of Us</Link></div>
      <div className="exampleGame"><Link to={`/Content`}>Halo 3</Link></div>
      <div className="exampleGame"><Link to={`/Content`}>Modern Warfare 2</Link></div>
      <div className="exampleGame"><Link to={`/Content`}>Arma 3</Link></div>
      <div className="exampleGame"><Link to={`/Content`}>Guitar Hero 3</Link></div>
      <div className="exampleGame"><Link to={`/Content`}>Cuphead</Link></div>
      <div className="exampleGame"><Link to={`/Content`}>Season</Link></div>
      <div className="exampleGame"><Link to={`/Content`}>Sifu</Link></div>
      <div className="exampleGame"><Link to={`/Content`}>The Forest</Link></div>
      <div className="exampleGame"><Link to={`/Content`}>Rust</Link></div>
      <div className="exampleGame"><Link to={`/Content`}>Pummel Party</Link></div>
      <div className="exampleGame"><Link to={`/Content`}>The Witcher 3: Wild Hunt</Link></div>
      <div className="exampleGame"><Link to={`/Content`}>Sun Haven</Link></div>
      <div className="exampleGame"><Link to={`/Content`}>Stardew Valley</Link></div>
      <div className="exampleGame"><Link to={`/Content`}>Viva Piñata</Link></div>
      <div className="exampleGame"><Link to={`/Content`}>Assetto Corsa</Link></div>
      <div className="exampleGame"><Link to={`/Content`}>rFactor 2</Link></div>
      <div className="exampleGame"><Link to={`/Content`}>Borderlands 3</Link></div>
      <div className="exampleGame"><Link to={`/Content`}>Borderlands 2</Link></div>
      <div className="exampleGame"><Link to={`/Content`}>CSGO</Link></div>
    </div>
  );
}