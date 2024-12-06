import Form from "../Components/Form";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  return (
    <div
      style={{
        position: "relative",
        textAlign: "center",
        background: "#878787",
        top: "10vw",
        borderRadius: "2vw",
        width: "50vw",
        height: "25vw",
        marginLeft: "300px",
      }}
    >
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form />
    </div>
  );
};

export default Contact;
