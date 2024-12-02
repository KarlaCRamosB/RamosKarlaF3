// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import doctor from "../images/doctor.jpg";
import { Link } from "react-router-dom";

const Card = ({ name, username, id, email }) => {
  const [dentista, setDentista] = useState({});

  const url = `https://jsonplaceholder.typicode.com/users/${id}`;

  // Fetch para obtener los datos del dentista
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setDentista(data));
  }, [url]);

  // Lógica para agregar o quitar de favoritos
  const addFav = () => {
    const favs = JSON.parse(localStorage.getItem("favs")) || [];
    const isAlreadyFav = favs.some((fav) => fav.id === dentista.id);

    let updatedFavs;
    if (isAlreadyFav) {
      // Si ya está en favoritos, lo eliminamos
      updatedFavs = favs.filter((fav) => fav.id !== dentista.id);
    } else {
      // Si no está, lo agregamos
      updatedFavs = [...favs, dentista];
    }

    localStorage.setItem("favs", JSON.stringify(updatedFavs));
    console.log("Favoritos actualizados:", updatedFavs);
  };

  return (
    <div className="card">
      {/* Imagen del doctor */}
      <img
        src={doctor}
        alt="doctor placeholder"
        style={{ width: "15vw", height: "13vw" }}
      />

      {/* Información del dentista */}
      <Link to={`/details/${id}`} style={{ marginTop: "2vw" }}>
        <h3>{name}</h3>
      </Link>
      <h5>{username}</h5>
      <h5>{email}</h5>

      {/* Botón para agregar/quitar de favoritos */}
      <button onClick={addFav} className="favButton">
        Add Favorite
      </button>
    </div>
  );
};

export default Card;












/*import React from "react";
import { Link } from "react-router-dom";
import doctor from "../images/doctor.jpg";

const Card = (id,name, username,email) => {
  let favs = localStorage.getItem('favs') || []
  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    if (favs == []) {
          
      
    } else {
      
    }
  }
  console.log(id);
  return (


    <div className="card">
      <img src={doctor} alt="doctor placeholder" style={{width:'18vw', height:'13vw'}}/>
    {/* En cada card deberan mostrar en name - username y el id *}/
    

    {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle }*/

    /*{ Ademas deberan integrar la logica para guardar cada Card en el localStorage }*/
   /* <button onClick={addFav} className="favButton">Add fav</button>
   </div>
  );
};



export default Card;*/