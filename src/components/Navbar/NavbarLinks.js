import React from "react";
import { Link } from "gatsby";

const Navi = ({ title, href, specialClass }) => {
  return (
    <>
      <li className={`nav__item ${specialClass}` }>
        <Link to={href}>
          <div className="block__reveal">
            <div className="reveal__item">{title}</div>
          </div>
        </Link>
      </li>
    </>
  )
}

const NavbarLinks = () => {
  return (
    <>
    <ul className="nav__list">
      <Navi title="Home" href="/" />
      <Navi title="About" href="/about" />
      <Navi title="services" href="/services" />
      <Navi title="start a project" specialClass="__contact" href="/contact-us" />
      </ul>
    </>
  )
}

export default NavbarLinks;
