import React, { memo, useState } from "react";
import { Menu, X } from "lucide-react";
import "./NavBarComponent.css";
import type { NavbarProps } from "./types";
import PrimaryButton from "../PrimaryButton/primaryButton";

const Navbar: React.FC<NavbarProps> = ({
  logo,
  items,
  scrolled = false,
  onNavigate,
  ctaText = "Hire Me",
  ctaHref = "#contact",
}) => {

    const [isOpen, setIsOpen] = useState(false);

    const navigate = (href: string) => {
        onNavigate(href);
        setIsOpen(false);
    };

    return (
        <nav
      className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}
      aria-label="Primary Navigation"
    >
      <div className="navbar__container">
        <button
          className="navbar__logo"
          onClick={() => navigate("#hero")}
          aria-label="Go to Home"
        >
          {logo}
        </button>

        <ul className="navbar__links">
          {items.map((item) => (
            <li key={item.href}>
              <button
                onClick={() => navigate(item.href)}
                className="navbar__link"
              >
                {item.label}
              </button>
            </li>
          ))}

          <li className="navbar__cta-wrapper">
            {/* <button
              className="navbar__cta"
              onClick={() => navigate(ctaHref)}
            >
              {ctaText}
            </button> */}
            <PrimaryButton label={ctaText} onClick={() => navigate(ctaHref)} />
          </li>
        </ul>

        <button
          className="navbar__toggle"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle Navigation"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div className={`navbar__mobile ${isOpen ? "show" : ""}`}>
        <ul>
          {items.map((item) => (
            <li key={item.href}>
              <button
                className="navbar__mobile-link"
                onClick={() => navigate(item.href)}
              >
                {item.label}
              </button>
            </li>
          ))}

          <li>
            <button
              className="navbar__mobile-cta"
              onClick={() => navigate(ctaHref)}
            >
              {ctaText}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default memo(Navbar);