import React, { useState } from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [contac, setcontac] =useState({
    nombre: "",
    email:   ""
})

const [Esperado, setEsperado] = useState(false)
const [err, setErr] = useState(false)

const handleSubmit = (event) => {
    event.preventDefault()
    if(contac.nombre.length >= 5) {
        setEsperado(true)
        setErr(false)
    } 
    else {
        setErr(true)
    }

}

  return (
    <div className="form">
       <form className="" onSubmit={handleSubmit} style={{width:'30vw', height:'20vw'}}>
            <input type="text" style={{ height:'30px'}} placeholder='Please enter your name' value={contac.nombre} onChange={(e) => setcontac({...contac, nombre: e.target.value})}/>
            <input type="email" style={{ height:'30px'}} placeholder='Enter your email' value={contac.email} onChange={(e) => setcontac({...contac, email: e.target.value})}/>
            <input type="submit" style={{background:'#eb3131', border:'none', borderRadius:'100px', height:'30px', color:'white'}}/>
            {err && "Please verify your information"}
      </form>

      {Esperado && "Thank you " + contac.nombre + ", We will contact you by email "} 
    </div>
  );
};

export default Form;