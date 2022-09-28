import logo_sochi from "../../assets/logo-sochi.png";
import mobli_icon from "../../assets/mobli-icon.png";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div>
        <div>
          <p>Aviso de privacidad / Contacto</p>
        </div>
        <div>
          <img src={logo_sochi} alt="logo-sochi" />
        </div>
        <div className="icon-container">
          <div className="icon-item">
            <img src={mobli_icon} alt="logo-sochi" />
          </div>
          <div className="icon-item">
            <img src={mobli_icon} alt="logo-sochi" />
          </div>
          <div className="icon-item">
            <img src={mobli_icon} alt="logo-sochi" />
          </div>
          <div className="icon-item">
            <img src={mobli_icon} alt="logo-sochi" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer