import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from '@apollo/client';
import { QUERY_CONTENT } from '../utils/queries';





export default function Homepage() {

    const { loading, data } = useQuery(QUERY_CONTENT);
    const newData = !loading ? data : []    
    console.log(newData)
    console.log(loading)

  return (
    <div className="homepageContainer">
      {data?.allContent ? data?.allContent.map(c => (
        <div className="exampleGame"><Link to={`/Content/${c.url}`}>{c.title}</Link></div>
      )):<></>}
      {/* <div className="exampleGame"><Link to={`/Content/thelastofus`}>The Last of Us</Link></div>
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
      <div className="exampleGame"><Link to={`/Content`}>CSGO</Link></div> */}
    </div>
  );
}