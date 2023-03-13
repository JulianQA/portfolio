import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./_headers.scss";

const Header = () => {
  const [active, setActive] = useState("/");

  const handleActive = (route) => {
    setActive(route);
  };
  const classActive = (route) =>
    active === route ? "routes__route active" : "routes__route";
  return (
    <header className="Header">
      <ul className="Header__routes">
        {routes.map((item) => (
          <li className={classActive(item.route)} key={item.route}>
            <Link to={item.route} onClick={() => handleActive(item.route)}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
};

const routes = [
  { route: "/", name: "Home" },
  { route: "/about", name: "About me" },
  { route: "/projects", name: "Projects" },
  { route: "/contact", name: "Contact" },
];

export { Header };
