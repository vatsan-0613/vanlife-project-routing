import React, { useEffect } from "react"
import Header from "./Header";
import {Link} from "react-router-dom"

export default function Vans() {
  
  const [vans, setVans] = React.useState([])

  React.useEffect(() => {
    fetch("/api/vans")
      .then((response) => response.json())
      .then((data) => setVans(data.vans))
      .catch(err => console.log(err));
  }, []);

  console.log(typeof vans)

  const vanElements = vans.map(van =>(
    <Link to={`/vans/${van.id}`} className="link">
    <div key={van.id} className="van-title">
        <img src={van.imageUrl} alt="" className="van-img"/>
        <div className="van-info">
            <h3>{van.name}</h3>
            <p>${van.price}<span>/day</span></p>
        </div>
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
    </div>
    </Link>
  ))
  return(
    <div className="van-list-container">
      <h1 className="explore-title">Explore our vans</h1>
      <div className="vans">
        {vanElements}
    </div>
    </div>
  )
}
