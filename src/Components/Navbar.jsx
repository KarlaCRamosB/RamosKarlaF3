import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../routes";
import { useContextGlobal } from "./utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { changeTheme } = useContextGlobal();
  return (
    <section>
      <a className="nabvarDh" href="/home">
        {" "}
        DH Odonto{" "}
      </a>
      <nav>
        {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}

        <Link to={routes.Home}>
          <h3>Home</h3>
        </Link>
        <Link to={routes.Contact}>
          <h3>Contact</h3>
        </Link>
        <Link to={routes.Favs}>
          <h3>Favs</h3>
        </Link>
        {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
        <button onClick={changeTheme}>🌙</button>
      </nav>
    </section>
  );
};

export default Navbar;
