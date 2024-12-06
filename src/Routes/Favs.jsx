import { Link } from "react-router-dom";
import doctor from "../images/doctor.jpg";

const Favs = () => {
  const favs = JSON.parse(localStorage.getItem("favs")) || [];

  return (
    <>
      <h1 style={{ marginTop: "10vw", textAlign: "center" }}>Dentists Favs</h1>
      <div className="card-grid">
        {favs.length > 0 ? (
          favs.map((dentista) => (
            <div className="card" key={dentista.id}>
              <img style={{ width: "180px" }} src={doctor} alt="doctor" />
              <h2>{dentista.id}</h2>
              <h2>{dentista.name}</h2>
              <h2>{dentista.username}</h2>
              <Link to={`/details/${dentista.id}`}>
                <h4 style={{ color: "red" }}>Detail</h4>
              </Link>
            </div>
          ))
        ) : (
          <p style={{ textAlign: "center" }}>No favorite dentist added yet.</p>
        )}
      </div>
    </>
  );
};

export default Favs;
