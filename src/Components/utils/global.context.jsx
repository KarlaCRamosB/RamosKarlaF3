import { createContext, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

export const ContextGlobal = createContext();

const changeTheme = () => {
  const body = document.querySelector("body");
  body.classList.toggle("dark");
};

const ContextProvider = ({ children }) => {
  const [datos, setDatos] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/users/";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setDatos(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <ContextGlobal.Provider value={{ datos, changeTheme }}>
      {children}
    </ContextGlobal.Provider>
  );
};

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

const useContextGlobal = () => useContext(ContextGlobal);

export { ContextProvider, useContextGlobal };

//    export default ContextProvider;

//  export const useContextGlobal = () =>  useContext(ContextGlobal);
