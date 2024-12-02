//import React from "react";
import { Link } from "react-router-dom";
//import Card from "../Components/Card";
import doctor from "../images/doctor.jpg"
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  let favs = localStorage.getItem('favs')
  let parsedFavs = JSON.parse(favs)
 // const favs = JSON.parse(localStorage.getItem('favs')) || [];
  //const style = { position: 'relative', top: '7vw'}


  return (
    <>
      <h1 style={{marginTop:'10vw'}}>Dentits Favs</h1>
      <div className="card-grid">
      {parsedFavs.map(dentista => (
        <div className="card" key={dentista.id}>
         <img style={{width: "180px"}} src={doctor} alt="doctor" />
        <h2>{dentista.id}</h2>
        <h2>{dentista.name}</h2>
        <h2>{dentista.username}</h2>
        <Link to={`/details/${dentista.id}`}>
     <h4 style={{ color: 'red' }}>Detail</h4>
   </Link>
      
   </div>
         
    ))}
        
       
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
      </div>
    </>
  );
};

export default Favs;