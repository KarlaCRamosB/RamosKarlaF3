import { createContext, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

export const ContextGlobal = createContext();

const changeTheme = () => {
  const body = document.querySelector("body");
  if (body) {
    const isDark = body.classList.contains("dark");
    body.classList.toggle("dark", !isDark);
  }
};

const ContextProvider = ({ children }) => {
  const [datos, setDatos] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const url = "https://jsonplaceholder.typicode.com/users/";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Error fetching data");
        }
        const data = await response.json();
        setDatos(data);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
      }
    };
    fetchData();
  }, [url]);

  return (
    <ContextGlobal.Provider value={{ datos, changeTheme }}>
      {fetchError ? <div>Error: {fetchError}</div> : children}
    </ContextGlobal.Provider>
  );
};

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

const useContextGlobal = () => useContext(ContextGlobal);

export { ContextProvider, useContextGlobal };
