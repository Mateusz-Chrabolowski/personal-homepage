import { useEffect, useState } from "react";
import Container from "../layout/Container";
import "./Header.css";

function Header() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = saved === "dark" || (!saved && prefersDark);

    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleTheme = () => {
    setDark((prev) => {
      const next = !prev;
      localStorage.setItem("theme", next ? "dark" : "light");
      document.documentElement.classList.toggle("dark", next);
      return next;
    });
  };

  return (
    <header className="header">
      <Container>
        <button className="header__toggle" onClick={toggleTheme}>
          DARK MODE
        </button>
      </Container>
    </header>
  );
}

export default Header;
