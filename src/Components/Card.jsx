import { useEffect, useState } from "react";
import doctor from "../images/doctor.jpg";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

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
      <div className="dentist-info">
      <Link to={`/details/${id}`}>
        <h3>{name}</h3>
      </Link>
      <h5>{username}</h5>
      <h5>{email}</h5>
      </div>

      {/* Botón para agregar/quitar de favoritos */}
      <button onClick={addFav} className="favButton">
        Add Favorite
      </button>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
};
export default Card;

