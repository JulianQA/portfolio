import React from "react";
import { ImagePreview } from "../../components/ImagePreview/ImagePreview";
import { diplomaData } from "../../mock/diplomaData";
import me from "../../assets/imgs/me_tiny.jpg";
import "./_aboutScreen.scss";

const AboutScreen = () => {
  return (
    <div className="AboutScreen screen">
      <div className="AboutScreen__description">
        <img src={me} alt="" className="description__me-img" />
        <div className="description__text">
          <p style={{ marginBottom: "20px" }}>
            Hi, my name is Julián Quintero, I'm frontend developer. I've studied
            systems engineering at Escuela Colombiana de Ingeniería and done
            courses at Platzi. I know{" "}
            <code>HTML, CSS, JavaScript, React, Sass, SQL and Python.</code>
          </p>
          <p>
            I am a cheerful, self-taught person, I like to work in team and
            always give my best.
          </p>
        </div>
      </div>

      <p style={{ color: "white", fontSize: "2.5rem" }}>
        Some of the courses that I've approved :
      </p>
      <div className="AboutScreen__courses">
        {diplomaData.map((item) => (
          <ImagePreview src={item.image} alt={item.name} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export { AboutScreen };
