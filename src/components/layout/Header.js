import logo_claro from "../../assets/logo-claro-sports.png";
import logo_sochi from "../../assets/logo-sochi.png";

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <ul>
          <li>
            <img src={logo_sochi} alt="logo-sochi"/>
          </li>
          <li>
            <img src={logo_claro} alt="logo-claro"/>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header