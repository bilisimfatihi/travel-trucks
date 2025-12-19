import { NavLink } from "react-router-dom";
import styles from "./AppBar.module.css";
import Logo from "../../assets/traveltruckslogo.svg";

const AppBar = () => {
  return (
    <header className={styles.header}>
      <NavLink to="/" className={styles.logo}>
        <img src={Logo} alt="Travel Trucks logo" className={styles.logoIcon} />
      </NavLink>
      <nav className={styles.nav}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/catalog"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          Catalog
        </NavLink>
      </nav>
    </header>
  );
};

export default AppBar;
