import { useCallback, useEffect, useState } from "react";
import NavBarComponent from "../components/NavBarComponent/NavBarComponent";
import type { NavItem } from "../components/NavBarComponent/types";

const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const onNavigate = useCallback((href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <NavBarComponent
      logo={<span>BNR.</span>}
      items={navItems}
      scrolled={scrolled}
      onNavigate={onNavigate}
      ctaText="Hire Me"
      ctaHref="#contact"
    />
  );
};

export default Navbar;
