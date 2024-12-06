import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Detail = () => {
  const [dentista, setDentista] = useState({});

  const params = useParams();
  console.log(useParams());

  const url = `https://jsonplaceholder.typicode.com/users/${params.id}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setDentista(data));
  }, [params.id, url]);

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th className="table-title" colSpan="2">
              Detalles dentista {dentista.id}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Nombre:</th>
            <td>{dentista.name}</td>
          </tr>
          <tr>
            <th>Email:</th>
            <td>{dentista.email}</td>
          </tr>
          <tr>
            <th>Teléfono:</th>
            <td>{dentista.phone}</td>
          </tr>
          <tr>
            <th>Website:</th>
            <td>{dentista.website}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Detail;
