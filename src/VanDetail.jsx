import React from "react";
import { useParams } from "react-router-dom";

export default function VanDetail() {
  const params = useParams();
  const id = params.id;
  
  const [van, setVan] = React.useState(null);

  React.useEffect(() => {
    fetch(`/api/vans/${id}`)
      .then((response) => response.json())
      .then((data) => setVan(data.vans))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="van-detail-container">
        {
            van ? 
            <div className="van-detail">
                <div><img className="van-img" src={van.imageUrl} alt="" /></div>
                <div className="details">
                    <i className={`van-type ${van.type} selected`}>{van.type}</i>
                    <h3>{van.name}</h3>
                    <p>${van.price}<span>/day</span></p>
                    <p>{van.description}</p>
                    <button className="find-btn rent-btn">Rent this van</button>
                </div>
            </div> : <h2>Loading...</h2>
        }
    </div>
  );
}
