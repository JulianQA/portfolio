import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./_headers.scss";

const Header = () => {
  const location = useLocation();

  const classActive = (route) =>
    location.pathname === route ? "routes__route active" : "routes__route";

  return (
    <header className="Header">
      <ul className="Header__routes">
        {routes.map((item) => (
          <li className={classActive(item.route)} key={item.route}>
            <Link to={item.route}>{item.name}</Link>
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
