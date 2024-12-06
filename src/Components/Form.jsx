import { useState } from "react";

const Form = () => {
  const [contac, setcontac] = useState({
    nombre: "",
    email: "",
  });

  const [esperado, setEsperado] = useState(false);
  const [err, setErr] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Valida el formato de correo

    if (contac.nombre.length < 5) {
      setErr("El nombre debe tener al menos 5 caracteres.");
      setEsperado(false);
      return;
    }

    if (!emailRegex.test(contac.email)) {
      setErr("Por favor, ingresa un correo válido.");
      setEsperado(false);
      return;
    }

    setErr("");
    setEsperado(true);
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit} style={{ width: "30vw", height: "20vw" }}>
        <input
          type="text"
          style={{ height: "30px" }}
          placeholder="Please enter your name"
          value={contac.nombre}
          onChange={(e) => setcontac({ ...contac, nombre: e.target.value })}
        />
        <input
          type="email"
          style={{ height: "30px" }}
          placeholder="Enter your email"
          value={contac.email}
          onChange={(e) => setcontac({ ...contac, email: e.target.value })}
        />
        <input
          type="submit"
          style={{
            background: "#eb3131",
            border: "none",
            borderRadius: "100px",
            height: "30px",
            color: "white",
          }}
        />
        {err && <p style={{ color: "red" }}>{err}</p>}
      </form>

      {esperado && (
        <p>
          Thank you {contac.nombre}, We will contact you by email {contac.email}
          .
        </p>
      )}
    </div>
  );
};

export default Form;
