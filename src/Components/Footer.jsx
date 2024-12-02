import React from "react";
import DH from "../images/DH.png";
import facebook from "../images/ico-facebook.png";
import intagram from "../images/ico-instagram.png";
import tikTok from "../images/ico-tiktok.png";
import whatsapp from "../images/ico-whatsapp.png";
// import "../index.css";

const Footer = () => {
  const style = { width: "2vw", cursor: "pointer" };
  return (
    <>
      <div
        style={{
          background: " #000080",
          width: "100vw",
          height: "5vw",
          marginTop: "20vw",
        }}
      ></div>
      <footer>
        <div style={{ position: "absolute", width: "20vw", left: "15vw" }}>
          <p>
            Powered by <img src={DH} alt="DH-logo" />
          </p>
        </div>
        <div
          style={{
            display: "flex",
            position: "absolute",
            right: "15vw",
            justifyContent: "space-around",
            width: "15vw",
            top: "5vw",
            //height: "3.4vw",//
          }}
        >
          <a id="social-icons" href="https://www.facebook.com/">
            <img src={facebook} alt="facebook" style={style} />
          </a>

          <a id="social-icons" href="https://www.tiktok.com/">
            <img src={intagram} alt="instagram" style={style} />
          </a>

          <a id="social-icons" href="https://www.tiktok.com/">
            <img src={tikTok} alt="tiktok" style={style} />
          </a>

          <a id="social-icons" href="https://www.whatsapp.com/">
            <img src={whatsapp} alt="whatsapp" style={style} />
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
